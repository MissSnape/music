import React from 'react';
import './App.css';
import { NavMenu } from './components/NavMenu';
import { TracsPlayer } from './components/TracsPlayer';
import { SideBar } from './components/SideBar';
import { Filters } from './components/filters';
import { Search } from './components/Search';
import { TrackListHeader } from './components/HeaderTrackList';
import { User } from './components/users';
import { NavBurger } from './components/NavBurger';
import { TracsList } from './components/TracsList';
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="img/logo.png" alt="logo"></img>
            </div>
            <NavBurger/>
            <NavMenu />
           
          </nav>
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filters/>
            <div className="centerblock__content">
              <TrackListHeader />
              <TracsList />
              
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <User />
            <SideBar />
          </div>
        </main>
        <div className="bar">
          <TracsPlayer/>
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
export default App;