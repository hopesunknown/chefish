import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from '../Header/Header';
import Login from '../Login/Login';
import MainContainer from '../MainContainer/MainContainer';

function App() {

  const [user, setUser] = useState(null);
  const [locationData, setLocationData] = useState([]);
  const [dishesData, setDishesData] = useState([]);
  
  
    useEffect(() => {
      fetch("/me").then((response) => {
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

    useEffect(() => {
      fetch("/dishes")
        .then((r) => r.json())
        .then((dish) => {setDishesData(dish)});
    }, []);

  function handleLogout() {
    setUser(null);
  }

  // function handleUpdateItem(updatedItemObj) {
  //   const editedItems = yogaData.map((item) => {
  //     if (item.id === updatedItemObj.id) {
  //       return updatedItemObj;
  //     } else {
  //       return item;
  //     }
  //   });
  //   setYogaData(editedItems);
  // }

  function handleFindLocationData(yogaVideoData){
    setDishesData(yogaVideoData);
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
              // handleUpdateItem={handleUpdateItem} 
              dishesData={dishesData} 
              // handleFindVideoData={handleFindVideoData} 
              user={user}
              />}/>    
        </Routes>
    </div>
    </>
  );
}


export default App;
