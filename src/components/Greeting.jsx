const Greeting = (props) => {
  return (
    <div className="greeting">
      <p>Give react some likes!</p>
      <button onClick={props.incrementPage}> 👍🏾 </button> 
    </div>
  )
}

export default Greeting