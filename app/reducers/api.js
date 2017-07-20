import { AsyncStorage } from 'react-native'

const initialState = {
  //line: ""
  //eventHistory: []
};

export default function api(state = initialState, action = {}) {
  console.log("welcome to the api reducer!")
  switch (action.type) {
    case "GOT_PET_DATA":
      return {
        ...state,
        eventHistory: action.data.slice(action.data.length-5,action.data.length)
      };
    case "ADD_EVENT_API_SUCCESS":
      return {
        ...state,
      };
    case "LOGOUT":
      return {
        ...state,
        accessToken: "",
        userEmail: "",
      }
    case "GOT_USER_DATA":
      try {
        AsyncStorage.setItem('@DogTrackToken:key', action.data.accessToken);
      } catch (error) {
        console.log("error w async storage: ",error)
      }
      return {
        ...state,
        accessToken: action.data.accessToken,
        userEmail: action.data.userEmail
      };
    default:
      return state;
  }
}
