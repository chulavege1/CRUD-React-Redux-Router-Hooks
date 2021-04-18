import React from 'react';
// Router.
import { BrowserRouter } from 'react-router-dom'; 
//
import UserData from './components/userData/userData'

const App = () => {

  return (
    <BrowserRouter>
      <UserData />  
    </BrowserRouter>
  );
}

export default App;
