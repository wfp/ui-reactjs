import React from 'react'
import PropTypes from 'prop-types'
import Portal from 'react-portal'
import Autosuggest from 'react-autosuggest'
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'

const renderInputComponent = inputProps => (
  <div className="quicksearch__wrap">
    <input {...inputProps} />
  </div>
);

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
  return `${suggestion.description}`;
}

function shouldRenderSuggestions() {
  return true;
}

function renderSuggestion(suggestion, { query }) {

  //var lastLetter = "A";
  /*console.log(lastLetter)
  var isNewLetter = false;
  var newLetter = "ss";
  if (suggestion.description.substring(0,1) !== lastLetter) {
    newLetter = suggestion.description.substring(0,1);
    isNewLetter = true;
    lastLetter = suggestion.description.substring(0,1);
  }*/

  const suggestionLabelText = `${suggestion.label}`;
  const labelMatches = AutosuggestHighlightMatch(suggestionLabelText, query);
  const labelParts = AutosuggestHighlightParse(suggestionLabelText, labelMatches);

  const suggestionText = `${suggestion.description}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <div>
      {/*<h3>{isNewLetter && <span>{ newLetter }</span>}</h3>*/}
      <div className="suggestion__content">
        <span className="suggestion__name">
          {
          labelParts.map((part, index) => {
              const className = part.highlight ? 'highlight' : null;
              return (
                <span className={className} key={index}>
                  {part.text}
                </span>
              );
            })
          }
        </span>
        <span className="suggestion__small">
            {
            parts.map((part, index) => {
              const className = part.highlight ? 'highlight' : null;
              return (
                <span className={className} key={index}>
                  {part.text}
                </span>
              );
            })
          }
        </span>
      </div>
    </div>
  );
}

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      noSuggestions: false,
      search: []
    };
  }

  getSuggestions = (value) => {
    this.toggleSidebar(true);
    const escapedValue = escapeRegexCharacters(value.trim());

    /*if (escapedValue === '') {
      return [];
    }*/

    console.log(escapedValue);

    const regex = new RegExp('\\b' + escapedValue, 'i');

    return this.state.source
      .map(section => {
        return {
          title: section.title,
          content: section.content.filter(singleContent => regex.test(singleContent.label + " " + singleContent.description))
        };
      })
      .filter(section => section.content.length > 0);
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

   onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = this.getSuggestions(value);
    const isInputBlank = value.trim() === '';
    const noSuggestions = !isInputBlank && suggestions.length === 0;

    this.setState({
      suggestions,
      noSuggestions
    });
  };

  onSuggestionsClearRequested = () => {
    this.toggleSidebar(false);
    // Reset input if no results
    const value = this.state.noSuggestions === true ? '' : this.state.value;
    this.setState({
      value: value,
      noSuggestions: false,
      suggestions: []
    });
  };

  getSectionSuggestions = (section) => {
    return section.content;
  }

  renderSectionTitle = (section) => {
    return (
      <strong>{section.title}</strong>
    );
  }

  // When Suggestions Selected Jump to Page
  onSuggestionSelected = (event, { suggestion }) => {
    //const { history } = this.props;
    //const link = buildLink(suggestion.type,suggestion.key, suggestion.to, suggestion.url);

    //if (link.external === true)
    // TODO: Move to React-Router
      setTimeout(() => { window.location.href = suggestion.link; }, 300);
    //else
    //  history.push(link.route)
  }

  toggleSidebar = (open) => {
    document.body.classList.toggle('sidebar--open', open);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ source: nextProps.data});
  }

//** Attempting access **//
  renderSuggestionsContainer = ({ containerProps , children, query }) => {
    // My direct need is accessing a method of App
    //var accessAppContext = this.someReactMethod();

    return (<Portal isOpened={true}>
      <div {... containerProps}>{children}</div>
    </Portal>);
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };


  render() {
      const { value, suggestions, noSuggestions } = this.state;
      const inputProps = {
          id: this.props.id,
          placeholder: this.props.placeholder,
          value,
          onChange: this.onChange
      };

    return (
      <form acceptCharset="UTF-8" className="quicksearch quicksearch--small">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          multiSection={true}
          shouldRenderSuggestions={shouldRenderSuggestions}
          alwaysRenderSuggestions={true}
          renderSectionTitle={this.renderSectionTitle}
          getSectionSuggestions={this.getSectionSuggestions}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent} />
          { noSuggestions &&
              <Portal isOpened={true}>
                <div className="react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open react-autosuggest__suggestions-container--nosuggestion">
                  <span>No suggestions</span>
                </div>
              </Portal>
          }
        </form>
    );
  }
}


Search.propTypes = {
    id: PropTypes.string,
    data: PropTypes.array,
    placeholder: PropTypes.string
};

export default Search;
