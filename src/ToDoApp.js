import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import TaskList from './TaskList';
import TasksHeader from './TasksHeader';
import Navigation from './Navigation';

class ToDoApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TasksHeader />
        <TaskList />
        <Navigation />
      </View>
    );
  }
}

export default ToDoApp;
