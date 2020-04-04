import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from './actions';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {filter: 'all'};
  }

  isAction(action) {
    if (this.state.filter == action) return styles.selected;
  }

  render() {
    const {container, btn, text} = styles;
    let arr = ['all', 'completed', 'pending'];
    return (
      <View style={container}>
        <TouchableOpacity
          style={[btn, this.isAction('all')]}
          onPress={() => this.setState({filter: 'all'}) || this.props.showAll()}
        >
          <Text style={[text]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[btn, this.isAction('completed')]}
          onPress={() =>
            this.setState({filter: 'completed'}) || this.props.showCompleted()
          }
        >
          <Text style={text}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[btn, this.isAction('pending')]}
          onPress={() =>
            this.setState({filter: 'pending'}) || this.props.showPending()
          }
        >
          <Text style={text}>pending</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, actions)(Navigation);

const styles = {
  container: {
    backgroundColor: '#81c04d',
    flexDirection: 'row',
  },
  btn: {flex: 1, paddingTop: 20, paddingBottom: 20},
  selected: {backgroundColor: '#81c099'},
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};
