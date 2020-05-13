import React from 'react';
import Add from './Add';
import User from './User';
import Delete from './Delete';
import Update from './Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

//Add Component
const Addpage = () => <Add />;

//Add Component
const Userpage = () => <User />;

//Delete Component
const Delpage = () => <Delete />;

//Update Component
const Updpage = () => <Update />;

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Userpage} />
        <Route exact path='/add' component={Addpage} />
        <Route exact path='/delete' component={Delpage} />
        <Route exact path='/update' component={Updpage} />
      </Switch>
    </div>
  );
}

export default App;
