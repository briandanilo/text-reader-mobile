import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'

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

class Counter extends Component {
  constructor(props) {
    super(props);
    this.changeCount = this.changeCount.bind(this)
  }

  changeCount(){
    this.props.dispatch({type:"ADD_TO_COUNTER"})
  }

  render() {
    console.log("renderinasfdasdfsdg.  this is the state: ", this.props)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.counter.count}</Text>
        <TouchableOpacity onPress={this.changeCount} style={styles.button}>
          <Text>Increment up Brian</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(container.allState)(Counter)
