import React from 'react'
import './HeroPlus.css'
// Carusel
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
const HeroPlus = () => {
  return (
    <div >
        <div className="hero_plus">
        <h1><span>ПРЕИМУЩЕСТВА</span> УЧЕБНОГО ЦЕНТРА</h1>

        <div className="mini_hero_plus">
          <div className="boxFor_img_hero">
            <img src="	https://inter-nation.uz/benefits/students-app1.svg" alt="" />
            <h2>Инновационное обучение с платформой студентов</h2>
          </div>
          <div className="boxFor_img_hero">
            <img src="https://inter-nation.uz/benefits/unique-program1.svg" alt="" />
            <h2>Уникальная учебная программа</h2>
          </div>
          <div className="boxFor_img_hero">
            <img src="https://inter-nation.uz/benefits/academic-support1.svg" alt="" />
            <h2>Academic support</h2>
          </div>
        </div>
      </div>
      <h1 className='caruel_text'><span>ПРЕИМУЩЕСТВА </span> УЧЕБНОГО ЦЕНТРА</h1>
      <Carousel data-bs-theme="dark" className='carusel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://inter-nation.uz/benefits/academic-support1.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='txt_carusel'>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://inter-nation.uz/benefits/unique-program1.svg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HeroPlus