import React from 'react'

function Reviews(props) {
    console.log(props)
  return (
    <div className='review-card'>
        {/* <span>Rating : {props.rating}</span> */}
        <span>Customer Name : {props.name}</span>
        <p>Review : {props.review}</p>
    </div>
  )
}

export default Reviews