import React from "react";
// import "../Styles";
import { Link } from 'react-router-dom';
// import YoutubeEmbed from "..YoutubeEmbed/YoutubeEmbed";

export default function Video({ dishesData, locationData }) {

  const { dishname, price, cuisine, town } = dishesData

  return (
    <div className="video-container">
      <Link exact to="*" className="literally-back-button">Back</Link>
      {/* <YoutubeEmbed videoData={video} /> */}
      <h2 className="video-title" >Dish: {dishname}</h2>
      <h5 className="video-category">Price: {price}</h5>
      <p className="video-description">Cuisine: {cuisine}</p>
      <p className="video-description">Town: {town}</p>
    </div>
  );
}