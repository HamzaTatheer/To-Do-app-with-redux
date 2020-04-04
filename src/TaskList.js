import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import RadioButton from './RadioButton';
import AddTask from './AddTask';
import CircleCheckBox from 'react-native-circle-checkbox';
import {connect} from 'react-redux';
import * as actions from './actions';

class TaskList extends Component {
  renderTask({item}) {
    const {TaskTile, taskText} = styles;
    const {filter} = this.props;
    if (filter === 'show_all') {
      return (
        <View style={TaskTile}>
          <RadioButton
            size={7}
            onPress={(selected) => this.decideAction(selected, item)}
            selected={item.completed}
          />
          <Text style={taskText}>{item.task}</Text>
        </View>
      );
    } else if (filter === 'show_completed') {
      if (item.completed === true)
        return (
          <View style={TaskTile}>
            <Text style={taskText}>{item.task}</Text>
          </View>
        );
    } else if (filter === 'show_pending') {
      if (item.completed === false)
        return (
          <View style={TaskTile}>
            <RadioButton
              size={7}
              onPress={(selected) => this.decideAction(selected, item)}
              selected={item.completed}
            />
            <Text style={taskText}>{item.task}</Text>
          </View>
        );
    }
  }

  renderInputTask() {
    if (this.props.filter != 'show_completed') {
      return <AddTask />;
    }
  }

  decideAction(selected, item) {
    if (selected === true) {
      this.props.markTaskCompleted(item.id);
    } else {
      this.props.markTaskNotCompleted(item.id);
    }
  }

  render() {
    const {ListEndMargin, ListStartMargin} = styles;
    return (
      <>
        <FlatList
          ListHeaderComponent={<></>}
          ListHeaderComponentStyle={ListStartMargin}
          data={this.props.allTasks.tasks}
          renderItem={(item) => this.renderTask(item)}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={<>{this.renderInputTask()}</>}
          ListFooterComponentStyle={ListEndMargin}
        />
      </>
    );
  }
}

const styles = {
  TaskTile: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 50,
    alignItems: 'center',
  },
  taskText: {
    paddingLeft: 10,
  },
  Taskscontainer: {
    marginBottom: 100,
  },
  ListStartMargin: {
    marginTop: 50,
  },
  ListEndMargin: {
    margnBottom: 150,
  },
};

const mapStateToProps = (state) => {
  return {allTasks: state.tasks, filter: state.filter};
};

export default connect(mapStateToProps, actions)(TaskList);
