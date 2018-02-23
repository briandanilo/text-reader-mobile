import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'
import Tts from 'react-native-tts';

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

var x = "Ever Since"

class TextReader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Text Reader Loading: ", this.props)
    Tts.getInitStatus().then(() => {
      Tts.speak(x);
    });
    return (
        <Text>hello world</Text>
    );
  }
}

export default connect(container.allState)(TextReader)
