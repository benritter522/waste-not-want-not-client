import './App.css';

import { Route, Link, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" bg="dark" expand="sm">
        <Navbar.Brand >
          <Link style={{color: '#E2E7E7'}} to="/">Waste Not, Want Not</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{color: '#E2E7E7'}} id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={{color: '#E2E7E7', paddingLeft: 1600}} to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
