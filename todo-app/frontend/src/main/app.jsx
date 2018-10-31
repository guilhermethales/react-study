import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import Todo from '../components/todo/Todo';
import About from '../components/about/About';
import Menu from '../template/Menu';

export default props => (
  <div className="container">
    <Menu />
    <Todo />
    <About />  
  </div>
)