import React, { useState } from 'react';
import YogaItem from '../YogaItem/YogaItem';

export default function YogaList({ locationData, clicked, setClicked, handleUpdateItem, handleFindVideoData, handleFindId }) {

  const [dataIndex, setDataIndex] = useState(0)

  const locationItems = [...locationData]
    .slice(dataIndex, dataIndex + 3)

    .map((location) => 
    <YogaItem 
      key={location.id}
      location={location}
      handleUpdateItem={handleUpdateItem}
      clicked={clicked}
      setClicked={setClicked}
      handleFindVideoData={handleFindVideoData}
      handleFindId={handleFindId}
    />
  )

  function handleClickMore() {
    setDataIndex((dataIndex) => (dataIndex + 3) % locationData.length);
  }
  function handleClickLess() {
    setDataIndex((dataIndex) => (dataIndex - 3) % locationData.length);
  }
  
  return (
    <>
    <div className="comment-page-title">
      <p>Location List.</p>
    </div>
    <div className="comment-page-intro">
      <p>List of Locations.</p>
    </div>
    <div className="yoga-list">
      <div className="yoga-container">{locationItems}</div>
      <div className="float-container">
          <div className="next-container">
                <button 
                className="back-button" 
                onClick={handleClickLess}><i class="gg-chevron-left"></i></button>
          </div>
          <div className="next-container">
              <button 
                className="next-button" 
                onClick={handleClickMore}><i class="gg-chevron-right"></i></button>
            </div>
        </div>
    </div>
   </> 
  )
}
