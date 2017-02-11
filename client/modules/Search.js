import React from 'react';
import FormComponent from './formComponent';
import SubmitButton from './SubmitButton';

export default props => {

  return (
    <div>
      <h3 className="text-center">Search for a {props.search} here</h3>
      <FormComponent 
        name={props.name}
        value={props.titleSearch}
        onChange={props.onChange}
        noLabel={true}
        placeholder={props.placeholder}
      />
    </div>
  );
};
