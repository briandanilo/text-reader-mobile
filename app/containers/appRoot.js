'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import LoadEvents from '../components/loadEvents';
import AddEvents from '../components/addEvents';
import { connect } from 'react-redux';
import container from './all'
import {View,StyleSheet} from 'react-native'


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
    return (
      <View style={styles.view}>
        <LoadEvents/>
        <AddEvents/>
      </View>
    );
  }
}

export default connect(container.allState)(AppRoot);
