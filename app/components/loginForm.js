import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux'
import container from '../containers/all'
import addEventApi from '../actions/addEventApi'
import moment from 'moment'

const styles = StyleSheet.create({
  inputText: {
    width: 200,
    height: 50,
    padding: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  submitBtn: {
    width: 200,
    height: 50,
    padding: 10,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    fontSize: 100
  },
  submitText: {
    fontSize: 20,
  }
});

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
      }
  }

  render() {
    let fields = [
      {ref: 'email', placeholder: 'Email', keyboardType: 'email-address', secureTextEntry: false, style: [styles.inputText]},
      {ref: 'password', placeholder: 'Password', keyboardType: 'default', secureTextEntry: true, style: [styles.inputText]},
      {ref: 'submit', style:[styles.submitBtn]},
    ];

    return(<View>
        <View key={'email'}>
          <TextInput {...fields[0]} onChangeText={(text) => this.state.email = text} />
        </View>
        <View key={'password'}>
          <TextInput {...fields[1]} onChangeText={(text) => this.state.password = text} />
        </View>
        <TouchableHighlight {...fields[2]} onPress={() => this.onSubmit()}>
          <Text style={styles.submitText}>{'Submit'}</Text>
        </TouchableHighlight>
    </View>);
  }

  onSubmit() {
    console.log("submitting! ", this.state)
  }
}

export default connect(container.allState)(LoginForm)
