import React from 'react'
import ReactPlayer from 'react-player'
import './App.css'
export default function Video() {
    return (<React.Fragment>
        <div className='videocar'>
            <h1 className='qwe'>Что тут у нас, видео с Golf Mk1 GTI </h1>
            <div className='video2'>
            <ReactPlayer className='video'
        url="https://www.youtube.com/watch?v=vqhEu1oF0Ko"
      /></div>
      
        </div><div className='space'>
        
        <p>&copy; 2020 Megachel. Все права защищены. </p>
      
      </div>
      </React.Fragment>
    )
}

