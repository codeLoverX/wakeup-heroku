import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Hyperlinks } from './pages/Hyperlinks';

import { RouteComponent } from './pages/ModalPage';

function App() {

  return (
    // DESCRIPTION ROUTE IS IN THE PROFILE PAGE. IT'S AN EMBEDDED ROUTE
    <div>
        <Route path="/">
          <Hyperlinks />
        </Route>
        <Route path="/:id" children={<RouteComponent />} />
    </div>
  )
}

export default App
