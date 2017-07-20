import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'
import Auth0 from 'react-native-auth0';
import getUserInfo from '../actions/getUserInfo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 10
  },
});

class Logout extends Component {

  constructor(props) {
    super(props);
  }

  logout() {

    console.log("about to logout")
    let url = 'https://canines.auth0.com/v2/logout?returnTo=http%3A%2F%2Fwww.google.com';
      fetch(url)
      .then((e,r,x)=>{
        console.log("fetch logout response ",e,r,x)
      })
      .catch((error) => {
        console.log("logout call error: ",error);
      });


    AsyncStorage.removeItem('@DogTrackToken:key', (err, token) => {
      console.log("err, token ",err, token)
      this.props.dispatch({type:"LOGOUT"})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => { this.logout() }} title="Logout" />
      </View>
    )
  }

}


export default connect(container.allState)(Logout)
