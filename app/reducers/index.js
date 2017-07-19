import { combineReducers } from 'redux'
import counter from './counter';
import api from './api';

export default combineReducers({
  counter,
  api
})
