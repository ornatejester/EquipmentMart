import React from 'react';
import Login from './login/login';
import Home from './home/home';
import {Route,Switch,BrowserRouter,Redirect} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/index' component={Home} />
          <Route path='/login' component={Login}/>
          <Route exact path="/" render={() => <Redirect to="/index/mart" />} />
          
          <Redirect to='/index'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
