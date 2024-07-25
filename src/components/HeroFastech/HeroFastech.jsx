// import React from 'react'
import './HeroFastech.css'
import { FaPlus } from "react-icons/fa6";
import React, { useState } from 'react';
import Modal from './Modal/Modal';

const HeroFastech = () => {
    const [modalActive, setModalActive] = useState(false);
  return (
    <div>
        <div className="hero_fasteck">
        <div className="img_hero">
          
        </div>
        <div className="first_hero">
          <h1>Изучите сферу программирования вместе с <span className='black_txt_firHero'>Fastech IT Academy за 8 месяцев</span> на примерах реальных проектов!</h1>
        </div>
        <div onClick={() => setModalActive(true)} className="second_hero">
          <div className="mini_second_hero">
            <div className="hight_mini ">
              <div className="first_hig_hero">
                <h2>И, наконец, разработан проверенный метод  <span className='black_txt_secHero'> программированию.</span></h2>
              </div>
              <div className="second_hig_hero">
              <button className='plus_btn'>
                <FaPlus className='plus_icon'/>
                </button>
                <Modal active={modalActive} setActive={setModalActive} />
              </div>
            </div>
            <div className="down_mini ">
              <img src="https://optim.tildacdn.one/tild3637-3366-4133-b634-363861363563/-/resize/400x600/-/format/webp/5.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroFastech