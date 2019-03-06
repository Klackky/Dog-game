import React, { Component } from 'react';
import {Provider} from 'react-redux'
import GameContainer from './components/gameContainer'
import BreedQuestionContainer from './components/breedQuestionContainer'
import store from './store.js'
import './App.css';



class App extends Component {

  render() {

  //  console.log(`numberr`,this.state.number)
    return (
      
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
           <GameContainer />  
          <BreedQuestionContainer />
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
