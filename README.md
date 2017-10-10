# WSS

## Quick primer
WSS (WFP Self Service) is a mixed Django / React.JS application.
Each page is served by Django and it's a container for plain React.JS components.
Data binding is binding directly by React and the Django server will act as Rest API.

## Requirements
In order for the application to run, requirements are:
- *Node.JS*, along with its package manager.
- Run `brew install node`
- *Python*, along with its package manager PIP. It should be already installed.
- *Install Django*
- Run `python -c "import django; print(django.get_version())"`
- Run `sudo pip install Django`

## Inside the project folder
- Checkout the project from github
- Run `git clone https://github.com/wfp/wss-ui.git`
- *Install npm dependencies
- Run `npm install`
- *Install webpack*
- Run `npm install --save-dev webpack`
- *Install MkVirtualEnv*
- Run `sudo pip install virtualenvwrapper`
- Run `./mkvirtualenv wssdemo`
- *Create the user configuration file*
- In /settings, duplicate _sal.py (posgres) or _aetheros.py (sqlite) and rename it with your OS username
- *Setup configuration files*
- Run `pip install -r src/requirements/install.any.pip`
- Run `pip install -r src/requirements/develop.pip`
- Run `pip install -r src/requirements/django.pip`
- *Setup DB, choose whatever user, eg: guest 123*
- Run `./manage.py migrate`
- Run `./manage.py createsuperuser`

## Library development
- Run `npm run build`
- Run `sudo npm link`
- Run `cd demo && npm link wfp-wss-ui-react && npm run build`
- Run `python manage.py runserver`

## Documentation
WFP UI documentation can be found here: [UI-DOC](http://cdn.wfp.org/guides/ui/v0.14.0).

## Deprecated: How to build and run the static prototype with mocked data
It won't be necessary by the 1st of September, static html+CSS was used for quickly prototype purposes.

- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build the webapp for production
- Run `gulp serve:dist` to preview the production build






## Library development

###Setup
 
1. Install Facebook Watchman: https://facebook.github.io/watchman/docs/install.html
2. Run the following:
  - `sudo npm install -g wml`
  - `npm install`
  - `wml add lib/ demo/node_modules/wfp-ui-reactjs/lib/`
  -`cp package.json demo/node_modules/wfp-ui-reactjs/`
  - `wml start`
  
  
  In another terminal 
  - `cd demo`
  - `npm install`
 
###Development

 Run:  
- `npm run build`
- `cd demo`
- `npm run build`
- `python manage.py runserver`



## Documentation
WFP UI documentation can be found here: [UI-DOC](http://cdn.wfp.org/guides/ui/v0.14.0).


