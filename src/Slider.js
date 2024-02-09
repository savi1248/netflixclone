import React from 'react'
import './slider.css'

import Carousel from 'react-elastic-carousel'
import Card from './Card'


const movies = [
    {
   id:1,
   image:'https://image.tmdb.org/t/p/w200/opDY35ukPWTGFIxq17BBHJs49LD.jpg',
   imageBg:"https://image.tmdb.org/t/p/w200/2JHWZOaEc426dQnXnTJFurmXpu.jpg",
   title:'money',
   videoId:"HyOCCCbxwMQ"
    },
    {
        id:1,
        image:'https://image.tmdb.org/t/p/w200/opDY35ukPWTGFIxq17BBHJs49LD.jpg',
        imageBg:"https://image.tmdb.org/t/p/w200/2JHWZOaEc426dQnXnTJFurmXpu.jpg",
        title:'money',
        videoId:"HyOCCCbxwMQ"
         },
         {
            id:1,
            image:'https://image.tmdb.org/t/p/w200/opDY35ukPWTGFIxq17BBHJs49LD.jpg',
            imageBg:"https://image.tmdb.org/t/p/w200/2JHWZOaEc426dQnXnTJFurmXpu.jpg",
            title:'money',
            videoId:"HyOCCCbxwMQ"
             },
             {
                id:1,
                image:'https://image.tmdb.org/t/p/w200/opDY35ukPWTGFIxq17BBHJs49LD.jpg',
                imageBg:"https://image.tmdb.org/t/p/w200/2JHWZOaEc426dQnXnTJFurmXpu.jpg",
                title:'money',
                videoId:"HyOCCCbxwMQ"
                 },
                 {
                    id:1,
                    image:'https://image.tmdb.org/t/p/w200/opDY35ukPWTGFIxq17BBHJs49LD.jpg',
                    imageBg:"https://image.tmdb.org/t/p/w200/2JHWZOaEc426dQnXnTJFurmXpu.jpg",
                    title:'money',
                    videoId:"HyOCCCbxwMQ"
                     },
                     {
                        id:1,
                        image:'https://image.tmdb.org/t/p/w200/opDY35ukPWTGFIxq17BBHJs49LD.jpg',
                        imageBg:"https://image.tmdb.org/t/p/w200/2JHWZOaEc426dQnXnTJFurmXpu.jpg",
                        title:'money',
                        videoId:"HyOCCCbxwMQ"
                         },

] 
function Slider () { 
    const breakPoints = [
        {width:1,itemsToShow:1},
        {width:500,itemsToShow:2},
        {width:768,itemsToShow:3},
        {width:1200,itemsToShow:4},

    ]
return (
     <div className='slider'>
 <Carousel breakPoints = {breakPoints}>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
 </Carousel>
    </div>
  )
}

export default Slider