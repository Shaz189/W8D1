import users from "./user_reducer";
import { combineReducers } from 'redux';
import benches from './bench_reducer.js';

export default combineReducers({ users, benches });
