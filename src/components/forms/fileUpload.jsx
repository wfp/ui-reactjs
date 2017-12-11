import React from 'react';
import InlineError from './inlineError';
import Label from './label';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

const FileUpload = (props) => {
    const { input, disabled, name, label, type, selectDescription, meta: { touched, error } } = props;
    const files = input.value;

    console.log("Files", files);

    const onChange = (filesToUpload) => {
        //console.log(filesToUpload[0]);

        //const name = filesToUpload[0].name;

         var reader = new window.FileReader();
            reader.readAsDataURL(filesToUpload[0]); 
            reader.onloadend = function() {
                const base64data = reader.result; 
                filesToUpload[0].data = base64data;              
                input.onChange(filesToUpload);
                console.log(filesToUpload);
            }
    }

    return (
        <div>
            {!disabled &&
                <Dropzone
                    className="wfp-btn xsmall dropzone__select"
                    name={name}
                    onDrop={ onChange } 
                >
                    {selectDescription ? selectDescription : 'Upload a file'}
                </Dropzone>
            }
            {touched &&
                error &&
                <span className="error">{error}</span>}
            {files && Array.isArray(files) && (
                <ul className="dropzone__list">
                    { files.map((file, i) => <li key={i}>{file.name ? file.name : file.filename} <a onClick={( filesToUpload, e ) => input.onChange('')}>clear</a></li>) }
                </ul>
            )}
            {files && !Array.isArray(files) && (
                <ul className="dropzone__list">
                    <li>{files.name ? files.name : files.filename} 
                        {files.filename &&
                            <a href={`/${files.filename}`} target="_blank" className="dropzone__view">view</a>
                        }
                        {!disabled &&
                            <a onClick={( filesToUpload, e ) => input.onChange('')} className="dropzone__clear">clear</a>
                        }
                    </li>
                </ul>
            )}
        </div>
    );
}

export default FileUpload;