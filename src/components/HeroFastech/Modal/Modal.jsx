import React from 'react';
import './modal.css';
import { IoMdClose } from "react-icons/io";
const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            <div className="close_modal_btn">
                <button className='close_btn' onClick={() => setActive(false)}><IoMdClose /></button>
            </div>
                <div className="text_modal">
                    <div className="h2_text_close">
                    <h2>Актуальное программное обеспечение</h2>
                    </div>
                    <span>Наши курсы разработаны в соответствии с 
                        требованиями работодателей, на основе новейших 
                        технологий, отвечающих требованиям сегодняшнего времени. </span>
                    <div className="h2_text_close">
                    <h2>Помощь до трудоустройства</h2>
                    </div>
                    <span>По окончании курса вы получите сертификат 
                        нашего учебного центра и будете готовы работать
                         младшим программистом.
                        Мы поможем вам во всех процессах: от написания резюме до подготовки к собеседованию,
                         пока вы не получите работу после курса.</span>
                </div>
            </div>
        </div>
    );
};

export default Modal;