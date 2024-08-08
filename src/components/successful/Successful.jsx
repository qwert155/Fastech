import React from 'react'
import android from './img/android.png'
import apple from './img/apple.png'
import microsoft from './img/microsoft.png'
import './Successeful.css'
const Successful = () => {
  return (
    <div>
        <div className="our_succes">
      <div className="txt_succes">
        <h1><span>Результаты наших учеников</span> и Hаших стараний</h1>
      </div>
        <div className="block_resolt">
        <div className="first_floor">
        <div className="resolt_our_succes">
            <div className="img_result">
              <img src={android}alt="" />
            </div>
            <div className="info_result">
                  <div className="text_info">
                      <h1>Android</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque quis laborum vero, rerum incidunt sed doloribus praesentium sint, aliquid eligendi similique fugiat corrupti. Eos accusamus assumenda optio iste illum.</p>
                  </div>
                  <div className="btn_info">
                    <a href="https://www.android.com/">
                    <button>Посмотреть Сайт</button>
                    </a>
                  </div>
            </div>  
        </div>
        <div className="resolt_our_succes">
            <div className="img_result">
              <img src={apple} alt="" />
            </div>
            <div className="info_result">
                  <div className="text_info">
                      <h1>Apple</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque quis laborum vero, rerum incidunt sed doloribus praesentium sint, aliquid eligendi similique fugiat corrupti. Eos accusamus assumenda optio iste illum.</p>
                  </div>
                  <div className="btn_info">
                    <a href="https://www.apple.com/">
                    <button>Посмотреть Сайт</button>
                    </a>
                  </div>
            </div>  
        </div>
        </div>
        <div className="second_floor">
        <div className="resolt_our_succes">
            <div className="img_result">
              <img src={microsoft} alt="" />
            </div>
            <div className="info_result">
                  <div className="text_info">
                      <h1>Microsoft</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque quis laborum vero, rerum incidunt sed doloribus praesentium sint, aliquid eligendi similique fugiat corrupti. Eos accusamus assumenda optio iste illum.</p>
                  </div>
                  <div className="btn_info">
                    <a href="https://www.microsoft.com/en-us/">
                    <button>Посмотреть Сайт</button>
                    </a>
                  </div>
            </div>  
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Successful