import React, { Component } from 'react';


class App extends Component {
  // this is the old way.
  // we needed class components to use state
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  conponentDidMount() {
    document.title = `You have been clicked ${this.state.count} times`;
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You have been clicked ${this.state.count} times`
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    return (
    <> 
      <div>
        Hello World!
      </div>

      <button onClick={this.incrementCount}>
        I was clicked {this.state.count} times
      </button>

      <h2>Toggle Light</h2>
      <div
        style={{
          height: '50px',
          width: '50px',
          background: this.state.isOn ? 'yellow' : 'grey'
        }}
        onClick={this.toggleLight}
      />
      <h2>Mouse Position</h2>
      <p>X position: {this.state.x}</p>
      <p>Y position: {this.state.y}</p>
    </>
    );
  };
};
// New for React 16.7, you can use React fragments like <> and </> to wrap 
// adjacent JSX tags

export default App;
