

import Comedies from '../components/comedies/Comedies'
import Featured from '../components/featured/Featured'
import List from '../components/list/List'
 import Movies from '../components/movies/Movies'
import Navbar from '../components/navbar/Navbar'
import Swiper from  '../components/swiper/Swiper'
 import Animation from '../components/animation/Animation'
 import Documentries from '../components/documentries/Documentries'
import Tvshows from '../components/tvshows/Tvshows'
import Toprated from '../components/toprated/Toprated'
import './home.css'




const Home = () => {
  return (
    <div className='home'>
         <Navbar/>
         <Featured/>
         <List/>
        <Toprated/>
        <Swiper/>
        <Tvshows/>
       <Movies/>
       <Comedies/> 
       <Animation/> 
        <Documentries/> 
        
    </div>
         
  )
}

export default Home