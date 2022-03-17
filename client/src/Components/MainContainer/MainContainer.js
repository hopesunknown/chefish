import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import LocationList from '../LocationList/LocationList';
import DishesList from '../DishesList/DishesList';
import CommentList from '../CommentList/CommentList';
import ShowComment from '../ShowComment/ShowComment';

export default function MainContainer({ yogaData, handleUpdateItem, handleFindVideoData, videoData, user }) {

  const [clicked, setClicked] = useState(false);

  console.log(yogaData)

  return (
    <div>
       <Routes> 
          <Route exact path="/video" element={
              <Video 
                clicked={clicked} 
                setClicked={setClicked}
                videoData={videoData}
                yogaData={yogaData}
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
              yogaData={yogaData} 
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
