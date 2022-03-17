import React from 'react'

export default function LocationItem({ location }) {

    const { id, name, town } = location;

  return (<>
    <div>
        <h1>{name}</h1>
        <h1>{town}</h1>
    </div>
    </>
  )
}
