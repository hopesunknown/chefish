import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import LocationList from './LocationList';
import DishesList from './DishesList';

export default function MainContainer({ locationData }) {

  return (
    <div>
       <Routes> 
          <Route exact path="/dishes" element={
            <DishesList /> 
            }/>
          {/* <Route exact path="/comments" element={
          }/>
          <Route exact path="/comments/:id" element={
              
             }/> */}
          <Route exact path="*" element={
              <LocationList locationData={locationData} />
            }/>
        </Routes>  
    </div>
  )
}