import React, {Component} from 'react';
import {Text, TouchableHighlight, Dimensions} from 'react-native';

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: this.props.selected};
  }

  render() {
    let style = {};
    if (this.state.selected === true) {
      style = {
        borderRadius:
          Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ) / 2,
        width: Dimensions.get('window').width * 0.01 * this.props.size,
        height: Dimensions.get('window').width * 0.01 * this.props.size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7FC245',
      };
    } else {
      style = {
        borderRadius:
          Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ) / 2,
        width: Dimensions.get('window').width * 0.01 * this.props.size,
        height: Dimensions.get('window').width * 0.01 * this.props.size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#878787',
      };
    }

    return (
      <TouchableHighlight
        style={style}
        underlayColor="#878787"
        onPress={() => {
          this.props.onPress(!this.state.selected);
          this.setState({selected: !this.state.selected});
        }}
      >
        <Text></Text>
      </TouchableHighlight>
    );
  }
}

export default RadioButton;
