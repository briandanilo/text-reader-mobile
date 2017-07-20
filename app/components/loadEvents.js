import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'
import callApi from '../actions/api'
import moment from 'moment'

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    padding: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

class LoadEvents extends Component {
  constructor(props) {
    super(props);
    this.callApi = this.callApi.bind(this)
  }

  callApi(){
    this.props.dispatch(callApi());
  }

  renderEventHistory(){
    if (!this.props.api.eventHistory)
      this.props.dispatch(callApi())
    else
      return this.props.api.eventHistory.map((i)=>{
        return <Text>{i.petName} {i.eventType} ({moment(i.eventTime).fromNow()}) by {i.userName}</Text>
      })
  }

  render() {
    console.log("rendering.  this is the state: ", this.props)
    console.log("rendering.  this is the the lines: ", this.props.api.eventHistory)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.renderEventHistory()}
        <TouchableOpacity onPress={()=>{this.callApi()}} style={styles.button}>
        <Text>Update Events</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(container.allState)(LoadEvents)
