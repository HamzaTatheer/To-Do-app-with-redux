/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ToDoApp from './ToDoApp';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
          <ToDoApp/>
      </Provider>
    );
  }
}

export default App;
