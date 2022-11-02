import logo from './logo.svg';
import './App.css';
import VendingMachine from './components/VendingMachine';
import Snack from './components/Snack';
import React from 'react';
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {

  const LINKS = [
    "cheetos",
    "coca-cola",
    "famous-amos"
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMachine links={LINKS}/>} />
          <Route exact path={"/"+LINKS[0]} element={<Snack name={LINKS[0]} />} />
          <Route exact path={"/"+LINKS[1]} element={<Snack name={LINKS[1]} />} />
          <Route exact path={"/"+LINKS[2]} element={<Snack name={LINKS[2]} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
