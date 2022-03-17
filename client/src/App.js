import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import MainContainer from './MainContainer';

function App() {

  // const [user, setUser] = useState(null);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then((place) => {setLocationData(place)});
  }, []);

  return (
    <>
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="*" element={
            <MainContainer
            locationData={locationData}

            />}/>    
        </Routes>
    </div>
    </>
  );
}

export default App;
