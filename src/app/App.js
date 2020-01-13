import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../routes/LandingPage/LandingPage';
import AdoptionPage from '../routes/AdoptionPage/AdoptionPage';
import ErrorPage from '../routes/ErrorPage/ErrorPage';
import '../styles/App.css';

class App extends React.Component {
  state = {
    
  }
  render() {
    return (
    <div className="App">
      <main className="main">
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/adopted' component={AdoptionPage}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </main>
    </div>
    )
  }
}
export default App;
