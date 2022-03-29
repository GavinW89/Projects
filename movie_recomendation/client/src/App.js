import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import axios from 'axios';
import MenuAppBar from './components/Menubar';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm'
import MovieBox from './components/MovieBox';
import Main from './views/Main';
import {useEffect} from "react";



function App() {
  // useEffect(()=>{
  //   axios.get("http://localhost:8000/api/users/getall")
  //     .then(res=>console.log(res))
  //     .catch(err=>console.log(err))
  // },[])

  return (
    <div className="App">
        <MenuAppBar/>
      <div className='mt-4'>
        <Switch>

          <Route exact path='/'>
            <RegistrationForm/>
          </Route>

          <Route exact path='/login'>
            <LoginForm/>
          </Route>

          <Route exact path='/movie'>
              <MovieBox/>
          </Route>

          <Route exact path='/main'>
              <Main/>
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
