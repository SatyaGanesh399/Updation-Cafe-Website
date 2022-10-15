import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Navbar.css'
export default function 
() {
  return (
    <Carousel className='carousel-images'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 car-image"
          src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8&w=1000&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 car-image"
          src="https://cdn.luxe.digital/media/2020/05/07203610/best-coffee-beans-luxe-digital.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car-image"
          src="https://c.ndtvimg.com/2020-12/gonmuvso_coffee-_625x300_07_December_20.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
