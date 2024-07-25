import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div>
        <div className="video">
            <div className="video_side">
                <ReactPlayer controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc' className="main_video" />
            </div>
            <div className="text_side">
                <h1>И, наконец, разработан проверенный метод обучения программированию.</h1>
                <span>На основе опыта обучения около <span className='black_txt'> 1000 студентов 
                    Fastech IT Academy разработала специальный 
                    план курса</span> , который поможет вам быстрее и проще достичь результатов.
                </span>
            </div>
         </div>
  </div>
  )
}

export default Video;