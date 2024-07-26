import React from 'react'
import './Teachers.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
const Teachers = () => {
  return (
    <div>
        <div  className="teachers">
        <div className="text_teachers">
            <h1>У нас <span className='span_teach'>крутые  учителя</span></h1>
        </div>
        <div className="box_teachers">
        <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Nico</h1>
            <h1><span>Опыт Работы</span>: 6</h1>
            <h1><span>Возраст</span>: 26</h1>
            <h1><span>Компанни которые они работали</span>: Saudi Aramco,Tesla</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla</h3>
          </div>
        </div>
        <div className="first_teach ">
        <div className="expirions">
            <h1><span>Имя</span>: Magnus</h1>
            <h1><span>Опыт Работы</span>: 3</h1>
            <h1><span>Возраст</span>: 28</h1>
            <h1><span>Компанни которые они работали</span>: NVIDIA</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla</h3>
          </div>
        </div>
        <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Felix</h1>
            <h1><span>Опыт Работы</span>: 6</h1>
            <h1><span>Возраст</span>: 20</h1>
            <h1><span>Компанни которые они работали</span>: Microsoft,Amazon</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla</h3>
          </div>
        </div>
        <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Carlo</h1>
            <h1><span>Опыт Работы</span>: 10 лет</h1>
            <h1><span>Возраст</span>: 34</h1>
            <h1><span>Компанни которые они работали</span>:Google,Audi,Inter</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla</h3>
          </div>
        </div>
        <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla</h3>
          </div>
        </div>
        </div>
      </div>
      <div className="h1_carusel">
          <h1>У нас <span className='span_teach_caruusel'>крутые  учителя</span></h1>
      </div>
      <Carousel data-bs-theme="dark" className='carusel_teachers'>
      {/* 1 */}
      <Carousel.Item className='center_flex'>
      <div className="flex_box">
      <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla1</h3>
          </div>
        </div>
        <div className="first_teach big_flex">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla2</h3>
          </div>
        </div>
      </div>
      </Carousel.Item>
      {/* 2 */}
      <Carousel.Item className='center_flex'>
      <div className="flex_box">
      <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla3</h3>
          </div>
        </div>
        <div className="first_teach big_flex">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla4</h3>
          </div>
        </div>
      </div>
      </Carousel.Item>
      {/* 3 */}
      <Carousel.Item className='center_flex'>
      <div className="flex_box">
      <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla5</h3>
          </div>
        </div>
        <div className="first_teach big_flex">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla5</h3>
          </div>
        </div>
      </div>
      </Carousel.Item>
      {/* 4 */}
      <Carousel.Item className='center_flex'>
      <div className="flex_box">
      <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla5</h3>
          </div>
        </div>
        <div className="first_teach big_flex">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla5</h3>
          </div>
        </div>
      </div>
      </Carousel.Item>
      {/* 5 */}
      <Carousel.Item className='center_flex'>
      <div className="flex_box">
      <div className="first_teach">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla5</h3>
          </div>
        </div>
        <div className="first_teach big_flex">
        <div className="expirions">
            <h1><span>Имя</span>: Greg</h1>
            <h1><span>Опыт Работы</span>: 5 лет</h1>
            <h1><span>Возраст</span>: 25</h1>
            <h1><span>Компанни которые они работали</span>: Yandex,Google,React</h1>
          </div>
          <div className="hight_teach">
            <div className="img_back">
            <img src="https://static.vecteezy.com/system/resources/previews/025/003/295/original/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png.png" alt="" />
            </div>
          </div>
          <div className="down_teach">
              <h3>Mr.BlaBlaBla5</h3>
          </div>
        </div>
      </div>
      </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default Teachers;