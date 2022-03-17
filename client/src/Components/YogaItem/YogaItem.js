import React from 'react';
import { Link } from 'react-router-dom';

export default function YogaItem({ locationItem, handleUpdateItem, handleFindVideoData }) {

  const { id, name, town } = locationItem;

  function handleClick(e) {
    e.preventDefault();

    fetch(`/locations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: name,  
        town: town }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem))
  }
  
  function handleItemClick(){
    handleFindVideoData(locationItem)
  }

  return (
    <div className="yoga-item">
      <div>
        <h2 className="yoga-card-title">{name}</h2>
        {/* <img src={image} className="yogaimage" alt="yoga pose"/> */}
        <h4 className="yoga-card-category">{town}</h4>
      </div>
      <Link exact to="/video" onClick={handleItemClick} ><i class="gg-play-button-o"></i></Link>
    </div>
  );
}