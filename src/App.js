import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import UserForm from './all/UserForm.js';
import api1 from './all/api1.js';
import api2 from './all/api2.js';
import Navbar from './all/Navbar.js'
import api3 from './all/api3.js';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <div>
      <Route exact path='/' component={api1}/>
      <Route path='/api' component={UserForm}/>
      <Route path='/api2' component={api2} />
      <Route path='/api3' component={api3} />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
