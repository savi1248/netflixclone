import React from 'react'
import movies from "../data/documentries/documentries.json"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import './tamil.css'
export default function Swiper() {
  return (
    <div className='netflix-list-container'>
      <h1 className='title'>tamil</h1>
      <div className='movies'>

          <section id='section-11'>
          <a className='Previous' href="#section-12"><ChevronLeftIcon /></a>
          {movies.slice(0, 5).map((movie) => (
            <div className='movie' style={{ backgroundImage: `url(${movie.image_src})` }}></div>
          ))}
          <a className='Next' href="#section-12"><ChevronRightIcon /></a>
        </section>
       
        <section id="section-12">
            <a  className='Previous' href="#section-11"><ChevronLeftIcon/></a>
              {movies.slice(5, movies.length).map((movie) => (
         <div className='movie' style={{backgroundImage:`url(${movie.image_src})`}}> </div>
               ))}
                <a  className='Next' href="#section-11"><ChevronRightIcon/></a>
            </section>
            
              </div>
            </div>
     
  )
}

