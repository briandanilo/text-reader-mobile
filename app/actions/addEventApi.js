import React, { Component } from 'react';

export default function addEventApi (eventDetails) {

  return function (dispatch) {
    let url = 'http://localhost:3000/petEvents'
    return fetch('http://localhost:3000/petEvents', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventDetails)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch({ type:"ADD_EVENT_API_SUCCESS", data: responseJson })
      })
      .catch((error) => {
        console.log("failed to add pete event. error: ",error);
      });
  }
}
