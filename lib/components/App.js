import React from 'react';
import DataApi from '../DataApi';
import ContentWall from './ContentWall';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      person: {},
      allQuotes:[],
      randomQuote:{}
    };
  }


  async componentDidMount(){
    const rawData = await axios.get('/api');
    const api = new DataApi(rawData);
    const userData = api.getUserData();
    const quoteData = api.getAllQuotes();
    const randQuote = api.getRandomQuote();
    this.setState({
      person: userData,
      allQuotes: quoteData,
      randomQuote: randQuote
    });

  }
  render(){
    return(
      <div>
        <ContentWall quote={this.state.randomQuote} myInfo={this.state.person}/>
      </div>
    );
  }
}

export default App;
