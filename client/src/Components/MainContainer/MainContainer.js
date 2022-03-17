import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
// import LocationList from '../LocationList/LocationList';
// import DishesList from '../DishesList/DishesList';
// import CommentList from '../CommentList/CommentList';
// import ShowComment from '../ShowComment/ShowComment';

export default function MainContainer({ locationData, handleUpdateItem, handleFindVideoData, dishesData, user }) {

  const [clicked, setClicked] = useState(false);

  return (
    <div>
       <Routes> 
          <Route exact path="/video" element={
              <Video 
                clicked={clicked} 
                setClicked={setClicked}
                dishesData={dishesData}
                locationData={locationData}
                />} 
              />
          <Route exact path="/comments" element={
              <CommentList user={user} />} 
              />
          <Route exact path="/comments/:id" element={
               <ShowComment />
             }
             />
          <Route exact path="*" element={
            <YogaList 
              locationData={locationData} 
              clicked={clicked} 
              setClicked={setClicked}
              handleUpdateItem={handleUpdateItem}
              handleFindVideoData={handleFindVideoData}
              />} 
            />
        </Routes>  
    </div>
  )
}
