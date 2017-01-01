import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses : courses
  // can just use 'courses'  -> Shorthand property name
});

export default rootReducer;