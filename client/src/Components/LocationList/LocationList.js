import React from 'react';
import LocationItem from '../LocationItem/LocationItem';

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
      <h1>Welcome to Chefish!</h1>
      <h1>LocationList</h1>
     </> 
    )
  }
export default LocationList;