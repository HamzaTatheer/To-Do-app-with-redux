import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './actions';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {task: ''};
  }

  AddNewTask() {
    if (this.state.task != '') {
      this.props.addNewTask(this.state.task);
      this.setState({task: ''});
    }
  }

  render() {
    return (
      <View style={{paddingLeft: 40}}>
        <TextInput
          placeholder="Add a new todo..."
          value={this.state.task}
          onChangeText={(NewTask) => this.setState({task: NewTask})}
          returnKeyType="done"
          onSubmitEditing={() => this.AddNewTask()}
          style={{fontSize: 18}}
        />
      </View>
    );
  }
}

export default connect(null, actions)(AddTask);
