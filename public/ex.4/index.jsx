import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

// Using one component inside another default component
ReactDOM.render(
  <Family>
    <Member name="Guilherme" lastName="Thales"/>
  </Family> 
  , document.getElementById('app'));