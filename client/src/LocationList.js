import React from 'react';
import LocationItem from './LocationItem';

function LocationList({ locationData }) {
  
    const locationItems = [...locationData]
      .map((place) => 
      <LocationItem 
        key={place.id}
        location={place}
      />
    )
  
    
    return (
      <>
      <h1>LocationList</h1>
     </> 
    )
  }
export default LocationList;