import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import TaskList from './TaskList';
import AddTask from './AddTask';

class TasksHeader extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#7FC245',
          paddingTop: 30,
          paddingBottom: 10,
        }}
      >
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          Tasks For Today
        </Text>
      </View>
    );
  }
}

export default TasksHeader;
