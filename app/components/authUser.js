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

const credentials = {
  clientId: "Vv4-YSUwL2nB5HU76eVAOnfgGXF0pkNR",
  domain: "canines.auth0.com"
};
const auth0 = new Auth0(credentials);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class AuthUser extends Component {

  constructor(props) {
    super(props);
    // AsyncStorage.getItem('@DogTrackToken:key', (err, token) => {
    //   console.log("async retrieval from auth user",err,token)
    // })
  }

  // sends user to an Auth0 login page that will
  // send the user back once he has an access token
  authUser(dispatch) {
    auth0
        .webAuth
        .authorize({prompt: 'none', scope: 'openid email profile', audience: 'https://' + credentials.domain + '/userinfo'})
        .then((credentials) =>{
              console.log("creds from auth server: ",credentials)
              Alert.alert(
                  'Success',
                  'AccessToken: ' + credentials.accessToken,
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )
              dispatch(getUserInfo(credentials.accessToken))
              })
        .catch(error => console.log(error));
  }

  render() {
    console.log("rendering authuser component! current state is: ",this.props)
    console.log("access token is: ",credentials.accessToken)
    return (<View style={styles.container}>
        <Text style={styles.header}>
          Welcome!
        </Text>
        <Button onPress={() => { this.authUser(this.props.dispatch)} } title="Log In / Create Account" />
      </View>)
  }

}


export default connect(container.allState)(AuthUser)
