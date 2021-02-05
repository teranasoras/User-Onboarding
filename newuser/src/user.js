import React from 'react'

export default function User({ details }) {
  if (!details) {
    return <h3>fetching details</h3>
  }

  return (
    <div className='usercontainer'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}
