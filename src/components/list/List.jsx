

import ListItem from '../listitem/ListItem';


import './list.scss'

const List = () => {
 
    return (
        <div className='list'>
            <span className='listTitle'>Netflix Originals</span>
            <div className='wrapper'>
                

                <div className='container'>
                < ListItem />
               </div>
               
            </div>
        </div>
    )
}

export default List