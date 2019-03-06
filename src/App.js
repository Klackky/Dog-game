import React, { Component } from 'react';
import {Provider} from 'react-redux'
import GameContainer from './components/gameContainer'
import store from './store.js'
import './App.css';



class App extends Component {

  render() {

    return (
      
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
        <GameContainer />
         
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
