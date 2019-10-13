import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './App.css';

import Home from './components/Home';
import RotateArray from './components/RotateArray';

const App = () => (
  <BrowserRouter>
    <ListGroup as="ul">
      <ListGroup.Item as="li">
        <Link to='/'>Home / Reset</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        <Link to='/rotate-array'>Rotate Array</Link>
      </ListGroup.Item>
    </ListGroup>
    <div className="board">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rotate-array" component={RotateArray} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
