import React from 'react';
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
  <div>
    <h1>Família</h1>
    {/* cloneElement make a clone of the child props    , passing the props of the Father Component to children component,
    but this only works with one child component */}
    { childrenWithProps(React.Children, props) }
  </div>
)