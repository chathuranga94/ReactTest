import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses : courses,
  // can just use 'courses'  -> Shorthand property name
  authors : authors
});

export default rootReducer;