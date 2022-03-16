import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import MainContainer from './MainContainer';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="*" element={
            <MainContainer />}/>    
        </Routes>
    </div>
    </>
  );
}

export default App;
