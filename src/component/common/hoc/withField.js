import React from 'react';
import {Field} from "redux-form";

const withField = (Component) => ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched;

  return (
    <React.Fragment>
      <div>
        <Component {...input} {...props}/>
      </div>
      {hasError && <span>{meta.error}</span>}
    </React.Fragment>
  )
};

export default withField;