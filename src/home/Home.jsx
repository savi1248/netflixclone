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

import Trending from '../components/trending/Trending'

const Home = () => {
  return (
    <div className='home'>
         <Navbar/>
         <Featured/>
          {/* netflix originals */}
         <List/> 
         <Toprated/>
         {/* horror movies */}
         <Movies/>
         {/* slider 1 */}
        <Swiper/>
        {/* horror movies */}
        <Tvshows/>
      
       {/* slider 2 3 4 */}
       <Comedies/> 
       <Animation/> 
        <Documentries/> 
        {/* <Tamilmovies /> */}
        <Trending />
      
    </div>
         
  )
}

export default Home