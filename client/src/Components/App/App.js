import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from '../Header/Header';
import Login from '../Login/Login';
import MainContainer from '../MainContainer/MainContainer';

function App() {

  const [user, setUser] = useState(null);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then((place) => {setLocationData(place)});
  }, []);

  function handleLogout() {
    setUser(null);
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <div className="App">
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <Routes>
          <Route exact path="*" element={
            <MainContainer
            locationData={locationData}
            user={user} />}
            />    
      </Routes>
    </div>
    </>
  );
}

export default App;
