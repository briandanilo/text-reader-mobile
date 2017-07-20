import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'
import addEventApi from '../actions/addEventApi'
import moment from 'moment'

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

class AddEvents extends Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this)
  }

  addEvent(eventType){
    let eventDetails = {
      petName: "Burr",
      userName: this.props.api.userEmail,
      eventType: eventType
    }
    this.props.dispatch(addEventApi(eventDetails));
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>{this.addEvent('potty')}} style={styles.button}>
          <Text>Potty</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.addEvent('walk')}} style={styles.button}>
          <Text>Walk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.addEvent('food')}} style={styles.button}>
          <Text>Food</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(container.allState)(AddEvents)
