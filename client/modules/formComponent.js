import React from 'react';

export default props => (
  <div className="form-group">
    <label className="col-sm-2 control-label">{ (props.name.charAt(0).toUpperCase() + props.name.slice(1)) }:</label>
    <div className="col-sm-8">
      <input type="text" name={props.name} className="form-control" value={props.value} onChange={props.onChange.bind(null, props.name)} />
    </div>
  </div>
);
