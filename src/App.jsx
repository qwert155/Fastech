import './App.css';
import React, { useState } from 'react';
// Icons
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
// Scrool Nav
import { Link, animateScroll as scroll } from 'react-scroll';
// Firebase Nav Registor
import './firebase.js'
import {addDoc, collection,getFirestore } from 'firebase/firestore'
// Bars
import Bars from './Bars/Bars.jsx';
// components
import Video from './components/Video/Video.jsx';
import HeroPlus from './components/HeroPlus/HeroPlus.jsx';
import Guarantee from './components/Guarantee/Guarantee.jsx';
import Teachers from './components/Teachers/Teachers.jsx';
import Map from './components/Map/Map.jsx';
import SocialMedia from './components/SocialMedia/SocialMedia.jsx';
import MainRed from './components/MainRed/MainRed.jsx';
import HeroFastech from './components/HeroFastech/HeroFastech.jsx';
import Lesson from './components/Lesson/Lesson.jsx';
import Successful from './components/successful/Successful.jsx';

function App() {

  // Firebase
  const [inpValue1,setInpValue1]=useState('')
  const [inpValue2,setInpValue2]=useState('')

  const db = getFirestore();
  const setData = async () => {
      const docRef = await addDoc(collection(db, "myCollection"), {
        name: inpValue1,
        number: inpValue2,
      });
      alert("Ваши данные отправлены !")
    };

  // Bars
  const [barsActive,setBarsActive] = useState(false)

  // Registor
  const [isNavVisible, setIsNavVisible] = useState(true);
  const handleToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

    const handleClick = () => {
      window.location.href = "tel:+998 78 777-33-22";
    };
  return (
  <div className="app">

    {isNavVisible ? (
    <>
      <nav className='nav'>
        <div className="box_img">
          <div className="img_nav">
          <img src="https://optim.tildacdn.one/tild6165-6431-4963-b039-633233343630/-/cover/201x55/center/center/-/format/webp/Fastech_IT_Academy_L.png" alt="" />
          </div>
          <div className="ul_nav">
          <ul>
            <li>
            <Link to="video" smooth={true} duration={50}>Видео</Link>
            </li>
            <li>
            <Link to="lesson" smooth={true} duration={50}>Уроки</Link>
            </li>
            <li>
            <Link to="hero_plus" smooth={true} duration={50}>Плюсы</Link>
            </li>
            <li>
            <Link to="guarantee" smooth={true} duration={50}>Вопросы</Link>
            </li>
            <li>
            <Link to="teachers" smooth={true} duration={50}>Учителя</Link>
            </li>
            <li>
            <Link to="main_red" smooth={true} duration={50}>IT-академия</Link>
            </li>
            <li>
            <Link to="our_succes" smooth={true} duration={50}>Достижения</Link>
            </li>
            <li>
            <Link to="hero_fasteck" smooth={true} duration={50}>Проэкты</Link>
            </li>
            <li>
            <Link to="map" smooth={true} duration={50}>Адрес</Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="box_phone">
          <div className="icon_phone" onClick={handleClick}>
              <FaPhone className='phone_ic'/>
          </div>
          <div className="txt_phone">
            <span>+998 78 777-33-22</span>
          </div>

          <div onClick={() => setBarsActive(true)} className="media_bars">
              <FaBars/>
          </div>
        </div>
      </nav>
      <Bars active={barsActive} setActive={setBarsActive} />
      <div className='main_box'>
        <div className="img_main_back">
          
        </div>
        <div className="first_main_box">
        <h1>Станьте<span className='span_h1'>востребованным</span> и прибыльным профессионалом за 8 месяцев</h1> 
        <button onClick={handleToggle} className='btn_main'><span>Я хочу изучать IT</span></button>
        </div>
      </div>
      <Video />
      <Lesson />
      <HeroPlus/>
      <Guarantee/>
      <Teachers/>
      <MainRed/> 
      <Successful />
      <HeroFastech/> 
      <Map />
      <SocialMedia />
      <Link to="nav" smooth={true} duration={50}>
        <div className="phone_click">
          <FaCaretUp />
        </div>
      </Link>
      
    </> 
      ) : (
  <>
    <section className='main_registor'>
      <div className='registr'>
          <div className="btn_close">
            <button onClick={handleToggle}><IoMdClose /></button>
          </div>

          <div className="txt_regist">
            <h1>Оставьте свой контакт для получения дополнительной информации</h1>
          </div>
          <div className="inps_registr">
            <div className="first_inp">
              <input type="text" placeholder='Имя' value={inpValue1} onChange={(e) => setInpValue1(e.target.value)} />
            </div>
            <div className="second_inp">
                <h4>+998</h4>
                <input type="number" placeholder='(00)000-00-00' value={inpValue2} onChange={(e) => setInpValue2(e.target.value)}/>
            </div>
          </div>
          <div className="instrsting">
            <h3>Какие из наших курсов вас интересуют:</h3>
            <div className="inp_interiting">
                <input type="checkbox" name="foundation"/>
                <span>Foundation</span>
            </div>
            <div className="inp_interiting">
              <input type="checkbox" name="" id="" />
              <span>Frontend</span>
            </div>
            <div className="inp_interiting">
              <input type="checkbox" name="" id="" />
              <span>Backend</span>
            </div>

            <div className="inp_interiting">
              <input type="checkbox" name="" id=""  />
              <span>Bepul konsultatsiya olish</span>
            </div>
          </div>
          <div className="btn_firebase">
              <button onClick={setData} className='btn_main_regisor'><span>Отправить</span></button>
          </div>
      </div>
    </section>
  </>
      )}
  </div>

  );
}

export default App;
