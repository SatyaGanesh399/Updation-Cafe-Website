import React from "react";
import './CommentComp.css'

import Reviews from "./Reviews";
function CommentSection() {

  let [state, setState] = React.useState({rating : "", name : "", review : ""})
  const [review, setReview] = React.useState();
  function handleChange(e){
    setState( {
      ...state,
      [e.target.name] : e.target.value
    })}


  function handleSubmit(e){
    e.preventDefault();
    fetch('https://customer-reviews-bd57a-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json',
            {
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                rating : state.rating,
                name : state.name,
                review : state.review
            })});

    setState({rating : "", name : "", review : "",})
  }
  let customerReview = [];
  React.useEffect(() => {
    fetch('https://customer-reviews-bd57a-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json')
    .then(res => res.json())
    .then(res => {
      for(const item in res){
        customerReview.push(res[item])
      }
      setReview(customerReview)
    })
  }, []);

  // let allReviews = "";

  // if (review.length > 0) {
  //   allReviews = review.map((item) => (
  //     <Reviews
  //       name = {item.name}
  //       // rating = {item.rating}
  //       review = {item.review}
  //     />
  //   ));
  // }

  return (
    <div className="comments-container">
      <div className="comment-section">
        <div className="comment-inputs">
          <h3 className='customer-review'>Customer reviews</h3>
          <label for="Rating" className="labels">Rate our service</label>

          <select name="rating" id="cars" className="rate-options"
          onChange={handleChange}
          value = {state.rating}>
            <option disabled>Choose from below....</option>
            <option value="5" selected>5 - Love it</option>
            <option value="4">4 - Best</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Better</option>
            <option value="1">1 - Worst</option>
          </select>

          <label htmlFor="name" className="labels">Name</label>
          <input type="text" 
          name="name" 
          placeholder="Please Enter Your Name" 
          className="name-input"
          onChange={handleChange}
          value = {state.name}
          /><br />
          <label htmlFor="review" className="labels">Review</label>
          <textarea type="text" 
          name="review" 
          placeholder="Write Your Review"
          className="review-input"
          onChange={handleChange}
          value = {state.review}
          /><br/>
          <button type="submit" className="submit-button"
          onClick={handleSubmit}>Submit</button>
        </div>
        <div className="user-review-section">
            {/* {allReviews} */}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
