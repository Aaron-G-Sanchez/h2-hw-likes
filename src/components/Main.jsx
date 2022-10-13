import { useState, useEffect } from 'react'
import Greeting from './Greeting'
import Likes from './Likes'

const Main = () => {

  const [totalLikes, setTotalLikes] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
  }, [totalLikes])
  
  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes + 1 )
  }
  
  const decrementTotalLikes = () => {
    setTotalLikes(totalLikes - 1)
  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  let page 

  switch (currentPage) {
    case 0:
      page = <Greeting incrementPage={incrementPage} />
      break
    case 1:
      page =  <Likes
      totalLikes={totalLikes}
      incrementTotalLikes={incrementTotalLikes} 
      decrementTotalLikes={decrementTotalLikes}/>
  
    default:
      break;
  }
  return (
    <main>
     {page}
    </main>
  )
}

export default Main