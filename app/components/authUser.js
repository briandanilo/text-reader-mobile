import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'
import Auth0 from 'react-native-auth0';

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
  }

  authUser() {
    console.log("authing user!")
    auth0
        .webAuth
        .authorize({scope: 'openid email', audience: 'https://' + credentials.domain + '/userinfo'})
        .then(credentials =>{
              console.log("creds from auth server: ",credentials)
              Alert.alert(
                  'Success',
                  'AccessToken: ' + credentials.accessToken,
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )})
        .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Auth0Sample - Login
        </Text>
        <Button onPress={this.authUser} title="Log In" />
      </View>
    );
  }

}

export default connect(container.allState)(AuthUser)
