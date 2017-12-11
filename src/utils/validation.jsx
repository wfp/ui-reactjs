import moment from 'moment';

export const validateEmail = email => {
    if (!email) {
        return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return  'Invalid email address';
    }
    else{
        return null;
    }
}

export const isRequired = field => {
    if (!field){
        return 'Required';
    }
    else{
        return null;
    }
}

export const arrayIsRequired = field => {
    if (!field) {
        return 'Required';
    }
    else if (field.length == 0) {
        return 'Required';
    }
    else {
        return null;
    }
}

export const validateDateRange = (from, to) => {
    if ((from && !to) || (!from && to) || from>to){
        return 'Enter valid range';
    }
    else{
        return null;
    }
}

export const validateRoles = (br, text) => {
    //bf, other
    // || bf || other)
    if (!br) {
        return `Specify at least one ${text ? text : 'business role'}`;
    }
    else{
        return null;
    }
}


export const errorResponse = (errorFields) => {
  const errors = {};
  var generic = [];
  // Remove empty errors
  Object.keys(errorFields).forEach(function(key) {
    if (errorFields[key] === null) {
        delete errorFields[key];
    }
    else if (key === '_generic') {
        generic = errorFields[key];
        delete errorFields[key];
    }
  });

  if (Object.keys(errorFields).length >= 1 || generic.length >= 1) {
    errors._error = {fields: {}, generic: generic};

    errors._error.title = "Please check your input";

    Object.assign(errors._error.fields, errorFields);

  }

  console.log(errors);

  return Object.assign(errors, errorFields);

}