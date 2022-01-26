import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from './components/ClassCounter';
import Postitem from './components/Postitem';
import './styles/App.css'

function App() {


  return (
    <div className="App">
      <Postitem />
        <Postitem />
        <Postitem />
        <Postitem />
    </div>
  );
}

export default App;
