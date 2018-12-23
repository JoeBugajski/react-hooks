import React, {useState} from 'react'; 
// useState is a function, now part of React
// instead of creating a State object, you can just useState
// it allows us to "hook" into the ability to work with state
// instead of having to create an object, then use setState
// then having render called and triggering the whole lifecycle

const App = () => {
  // You need to execute useState at the top of component
  // This is how you initialize state
  const [count, setCount] = useState(0) // you feed useState an initial value
  // and you declare two variables,
  // here "count" is the key for the value stored in state (call it whatever)
  // here "setCount" is basically setState (call it whatever), just for this piece of state
  
  const incrementCount = () => {
    setCount(count + 1) // this is much simpler way to write click handler that sets state
  }

  // no render needed!
  return(
    <div>
      <button onClick={incrementCount}> 
        I was clicked {count} times.
      </button>
    </div>
  )
}

export default App;