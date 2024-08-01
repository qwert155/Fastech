import './Lesson.css'

const Lesson = () => {
  return (
    <div className="lesson">
      <div className="txt_lesson">
        <h1>Наши <span>курсы</span></h1>
      </div>
      <div className="box_lesson">
              <div className="first_box_lesson">
                <img src="https://static.tildacdn.one/tild3335-6231-4765-b331-653232316637/startup_company_rock.svg" alt="" />
                <h2>Foundation</h2>
                <hr />
                <h2 className='h2_box'>Продолжительность : 3 месяца</h2>
                <hr />
                <h2>Время : 1,5 часа</h2>
                <hr />
                <h2>Дни : 3 дня в неделю</h2>
                <hr />
              </div>
              <div className="first_box_lesson">
                <img src="	https://static.tildacdn.one/tild3132-3838-4965-b738-356239383834/research_eye_browser.svg" alt="" />
                <h2>Frontend</h2>
                <hr />
                <h2 className='h2_box'>Продолжительность: 8 месяцев</h2>
                <hr />
                <h2>Время : 1,5 часа</h2>
                <hr />
                <h2>Дни : 3 дня в неделю</h2>
                <hr />
              </div>
              <div className="first_box_lesson">
                <img src="https://static.tildacdn.one/tild3336-6333-4931-b638-346365663434/tech_tuning_support.svg" alt="" />
                <h2>Backend</h2>
                <hr />
                <h2 className='h2_box'>Продолжительность: 8 месяцов</h2>
                <hr />
                <h2>Время : 1,5 часа</h2>
                <hr />
                <h2>Дни : 3 дня в неделю</h2>
                <hr />
                </div>
      </div>
    </div>
  )
}

export default Lesson