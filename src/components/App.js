import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import RotateArray from './RotateArray';

const STRINGS_ARRAYS = '/strings-arrays/';

const App = () => {

  return (
    <BrowserRouter>
      <h2>
        Learning Algorithms
      </h2>

      <aside>
        <Link to="/">Home</Link>
        <Link to={STRINGS_ARRAYS + 'rotate-array'}>Rotate Array</Link>
      </aside>

      <Route path={STRINGS_ARRAYS + 'rotate-array'} component={RotateArray} />
    </BrowserRouter>
  );
};

export default App;
