import React from "react";
import './App.css';
import Header from"./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./swipeButtons"

function App() {
  return (
    // BEM es una combencion de nombre donde es mejor colocar las letras en minusculas
    <div className="app">
      {/*  header  */}
      <Header />

      {/*-------------tinder cards------- */}
      <TinderCards />
      {/*-------------swipeButtons------- */}
      <SwipeButtons />


    </div>
  );
}

export default App;
