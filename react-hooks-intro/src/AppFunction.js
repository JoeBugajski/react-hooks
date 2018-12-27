import React, {useState} from 'react'; 
// useState is a function, now part of React
// instead of creating a State object, you can just useState
// it allows us to "hook" into the ability to work with state
// instead of having to create an object, then use setState
// then having render called and triggering the whole lifecycle

const App = () => {
  // You need to execute useState at the top of component
  // This is how you initialize state
  const [count, setCount] = useState(0); // you feed useState an initial value
  // and you declare two variables,
  // here "count" is the key for the value stored in state (call it whatever)
  // here "setCount" is basically setState (call it whatever), just for this piece of state
  // In class components, state is always an object.
  // But with useState, it doesn't have to be. For example:
  const [isOn, setIsOn] = useState(false);


  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // with this custom setter function, 
  };  // we get this "previous state" value, call it whatever
      // doesn't have to return an object

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }

  // no render needed!
  return(
    <> 
      <h2>Counter</h2>
      <button onClick={incrementCount}> 
        I was clicked {count} times.
      </button>
      <h2>Toggle Light</h2>
      <img
        src={
          isOn 
          ? 'https://icon.now.sh/highlight/fd0'
          : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          height: '50px',
          width: '50px',
        }}
        alt='Flashlight'
        onClick={toggleLight}
      />
    </>
  )
}

export default App;