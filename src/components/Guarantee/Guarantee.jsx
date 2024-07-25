import React from 'react'
import "./Guarantee.css"
const Guarantee = () => {
  return (
    <div>
        <div className="guarantee">
      <div className="box_gua first">
        <div className="txt_box_gua">
            <h1>Я хочу учиться в Fastech IT Academy, но у меня нет возможности</h1>
            <span className='span_fir_gua'>У нас есть решения </span>
        </div>
      </div>
      <div className="box_gua second">
      <div className="fir_sec_media_box">
      <div className="first_btn">
        <div className="main_btn_gua twise_btn_gua">
          <button className='first_btn_gua'>1</button>
          <h2>Бесплатные компьютеры</h2>
        </div>
        <p className="text">Если у вас нет ноутбука, вы можете использовать наши компьютеры для участия в занятиях и выполнения домашних заданий.</p>
      </div>
      <div className="second_btn">
       <div className="main_btn_gua twise_btn_gua">
        <button className='second_btn_gua '>2</button>
        <h2>Оплата в 2 части</h2>
       </div>
            <p className="text">У вас также есть возможность оплатить стоимость курса двумя ежемесячными платежами.</p>
      </div>
      </div>
    <div className="treeth_box_media">
      <div className="teeth_btn">
        <div className="main_btn_gua teeth_btn2">
        <button className='teerth_btn_gua'>3</button>
        <h2>Сначала прочитай, потом плати</h2>
        </div>
          <p className="text">Через IT Bilim у вас также есть возможность сначала пройти курс, а затем оплатить его.</p>
      </div>
    </div>
      </div>

      </div>
    </div>
  )
}

export default Guarantee;