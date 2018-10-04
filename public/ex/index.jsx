import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

// Using one component inside another default component
ReactDOM.render(
  <Family lastName="Simões">
    <Member name="Guilherme"/>
  </Family> 
  , document.getElementById('app'));