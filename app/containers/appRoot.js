'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import LoadEvents from '../components/loadEvents';
import AddEvents from '../components/addEvents';
import AuthUser from '../components/authUser';
import Logout from '../components/logout';
import { connect } from 'react-redux';
import container from './all'
import {View,StyleSheet,AsyncStorage} from 'react-native'
import getUserInfo from '../actions/getUserInfo'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class AppRoot extends Component {

  constructor(props) {
    super(props);

    //first thing the app will do: check local storage for access token
    // AsyncStorage.getItem('@DogTrackToken:key', (err, token) => {
    //   console.log("async retrieval ",err,token)
    //   this.props.dispatch(getUserInfo(token))
    // })
  }

  render() {
    // if their email is not in the state, they are not logged in
    // so show them the login / create account component
    // else show them the app
    if (!this.props.api.userEmail){
      return (
        <View style={styles.view}>
          <AuthUser/>
        </View>
      )
    } else {
      return (
        <View style={styles.view}>
          <Logout/>
          <LoadEvents/>
          <AddEvents/>
        </View>
      )
    }

  }
}

export default connect(container.allState)(AppRoot);
