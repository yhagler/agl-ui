import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Schedule from './components/Schedule'
import Standings from './components/Standings'
import GameLimits from './components/GameLimits'
import AddGame from './components/AddGame'


import { BrowserRouter, Route } from 'react-router-dom'
import logo from './agLogo.png'




function App() {
  return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="home"><img style={{height: '50px', width: '50px'}} src={logo}/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="schedule">Schedule</Nav.Link>
            <Nav.Link href="game-limits">Game Limits</Nav.Link>
            <Nav.Link href="scouting">Scouting</Nav.Link>
            <Nav.Link href="standings">Standings</Nav.Link>
            <Nav.Link href="rule-book">Rule Book</Nav.Link>
            <NavDropdown title="Stats" id="basic-nav-dropdown">
              <NavDropdown.Item href="player-stats">Player Stats</NavDropdown.Item>
              <NavDropdown.Item href="weekly-stats">Weekly Stats</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar>

        <div style={{ backgroundColor: '#F5F5F5', paddingLeft: '100px', paddingRight: '100px', display: 'flex', flexFlow: 'column', height: '100%'}}> 
            <BrowserRouter>
              <Route path ="/schedule" exact component= { Schedule } />
              <Route path ="/standings" exact component= { Standings } />
              <Route path ="/game-limits" exact component= { GameLimits } />
              <Route path ="/add-game" exact component= { AddGame } />

            </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
