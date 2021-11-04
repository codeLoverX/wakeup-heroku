import React from 'react';
import { Route } from 'react-router-dom';

import ModalPage from './pages/ModalPage';

function App() {

  return (
    // DESCRIPTION ROUTE IS IN THE PROFILE PAGE. IT'S AN EMBEDDED ROUTE
    <div>

      <Navbar />
      <Route exact path="/">
        <ModalPage />
      </Route>

      {/* <Route path="/jerseys">
        <Jerseys />
      </Route> */}

      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/purchases">
        <Purchases />
      </Route>
      <Route path="/checkOut">
        <CheckOut />
      </Route>
      <Route path="/signIn">
        <SignIn />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>

      <Route exact path="/jerseys">
        <JerseysPartTwo />
      </Route>
      <Route path="/jerseys/:userPath">
        <DescriptionPartTwo />
      </Route>
      <Route exact path="/boots">
        <BootsPartTwo />
      </Route>
      <Route path="/boots/:userPath">
        <DescriptionPartTwo />
      </Route>
      <Route exact path="/accessories">
        <AccessoriesPartTwo />
      </Route>
      <Route path="/accessories/:userPath">
        <DescriptionPartTwo />
      </Route>

      <Footer />
    </div>
  )
}

export default App
