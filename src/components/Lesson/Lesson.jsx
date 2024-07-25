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
                <img src="https://static.tildacdn.one/tild3335-6231-4765-b331-653232316637/startup_company_rock.svg" alt="" />
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
                <img src="https://static.tildacdn.one/tild3335-6231-4765-b331-653232316637/startup_company_rock.svg" alt="" />
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