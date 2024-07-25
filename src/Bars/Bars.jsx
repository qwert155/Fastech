
import './Bars.css';
import { IoMdClose } from "react-icons/io";
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from "styled-components";
import { React, useState } from "react";

const Bars = ({active,setActive})=>{

    const [display, setDisplay] = useState(true);



    return(
        <Wrapper $display={display} >
        <div className={active ? "bars active" : "bars"} onClick={()=> setActive(false)}>
            <div className="bars_content" onClick={e => e.stopPropagation()}>
            <div className="close_bars_btn">
                <button className='close_btn_bars' onClick={() => setActive(false)}><IoMdClose /></button>
            </div>
                <div className="ul_nav">
                    <ul>
                        <li>
                        <Link to="video" smooth={true} duration={50} onClick={() => setDisplay(!display)}>Видео</Link>
                        </li>
                        <li>
                        <Link to="carusel" smooth={true} duration={50} onClick={() => setDisplay(!display)}>Плюсы</Link>
                        </li>
                        <li>
                        <Link to="guarantee" smooth={true} duration={50} onClick={() => setDisplay(!display)}>Вопросы</Link>
                        </li>
                        <li>
                        <Link to="teachers" smooth={true} duration={50} onClick={() => setDisplay(!display)}>Учителя</Link>
                        </li>
                        <li>
                        <Link to="main_red" smooth={true} duration={50} onClick={() => setDisplay(!display)}>Видео</Link>
                        </li>
                        <li>
                        <Link to="hero_fasteck" smooth={true} duration={50} onClick={() => setDisplay(!display)}>Проэкты</Link>
                        </li>
                        <li>
                        <Link to="map_dd" smooth={true} duration={50} onClick={() => setDisplay(!display)}>Федиал</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
  display: ${(props) => (props.$display ? "block" : "none")};
`;
export default Bars;