import React from 'react';

export default props => (
  <div>
    <h1>Família</h1>
    {/* cloneElement make a clone of the children props, passing the props of the Father Component to children component,
    but this only works with one child component */}
    { React.cloneElement(props.children, props) }
  </div>
)