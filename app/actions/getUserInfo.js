import React, { Component } from 'react';

export default function getUserInfo (token) {

  return function (dispatch) {
    console.log("lets get user email")
    let url = 'https://canines.auth0.com/userinfo/?access_token='+token;
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("user data: ",responseJson)
        console.log("responsejson email",responseJson.email)
        console.log("token ",token)
        dispatch({ type:"GOT_USER_DATA", data:{
          accessToken: token,
          userEmail: responseJson.email
        }})
      })
      .catch((error) => {
        console.log("api call error: ",error);
      });
  }
}
