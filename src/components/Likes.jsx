import LikeTotal from './LikeTotal'

const Likes = (props) => {

  let button 

  if(props.totalLikes <= 0){
    button = <button disable>-</button>
    
  }else{
    button = <button onClick={props.decrementTotalLikes}>-</button>
  }


  return (
    <div className='counter'>
        <LikeTotal totalLikes={props.totalLikes}/>
        <div className='button-containter'>
          <button onClick={props.incrementTotalLikes}>+</button>
          {button}
        </div>
    </div>
  )
}

export default Likes