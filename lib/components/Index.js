import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  constructor(){
    super();

    this.state = {
      answer: 42
    };


  }
  asyncFunction(){
    console.info('asyncFunction called');
    return Promise.resolve(77);
  }

  async componentDidMount(){
    this.setState({
      answer: await this.asyncFunction()
    });
  }
  render(){
    console.info(this.state.answer);
    return(
      <div>
        <small>the answer is {this.state.answer}</small>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>,document.querySelector('#root'));
