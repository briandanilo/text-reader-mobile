'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import LoadEvents from '../components/loadEvents';
import AddEvents from '../components/addEvents';
import AuthUser from '../components/authUser';
import Logout from '../components/logout';
import LoginForm from '../components/loginForm';
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
  }

  render() {
    console.log("hi brian revised")
    return (
      <View style={styles.view}>
        <Counter/>
      </View>
    )

  }
}

export default connect(container.allState)(AppRoot);
