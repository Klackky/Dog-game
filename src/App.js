import React, { Component } from 'react';
import {Provider} from 'react-redux'
import BreedQuestionContainer from './components/breedQuestionContainer'
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
          <BreedQuestionContainer />
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
