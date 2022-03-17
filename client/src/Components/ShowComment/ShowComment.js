import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';


export default function ShowComment() {

    // const [currentComment, setCurrentComment] = useState('')
    // const {id} = useParams();

    // useEffect(() => {
    //     fetch(`/comments/${id}`)
    //       .then((r) => r.json())
    //       .then((c) => {
    //         setCurrentComment(c)
    //       });
    // }, [id]);


  return (
      <h1>show comment</h1>
    // <div className="show-comment">{currentComment.description}</div>
  )
}