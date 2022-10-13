import { useState, useEffect } from 'react'
import LikeTotal from './LikeTotal'

const Likes = () => {

  const [totalLikes, setTotalLikes] = useState(0)

  useEffect(() => {
  }, [totalLikes])

  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes + 1 )
  }

  const decrementTotalLikes = () => {
    setTotalLikes(totalLikes - 1)
  }

  let button 

  if(totalLikes <= 0){
    button = <button disable>-</button>
    
  }else{
    button = <button onClick={decrementTotalLikes}>-</button>
  }


  return (
    <div className='counter'>
        <LikeTotal totalLikes={totalLikes}/>
        <div className='button-containter'>
          <button onClick={incrementTotalLikes}>+</button>
          {button}
        </div>
    </div>
  )
}

export default Likes