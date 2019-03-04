import React, { Component } from 'react';
import {Provider} from 'react-redux'
import FormContainer from './components/formContainer'
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
          <FormContainer />
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
