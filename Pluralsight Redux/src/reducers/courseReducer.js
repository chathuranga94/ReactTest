import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
	switch(action.type){
		case types.CREATE_COURSE:
			debugger;
			return [...state,
				Object.assign({},action.course)
			];
			// Spread operator and immutability of store -> Object.assign
	
		case types.LOAD_COURSES_SUCCESS:
			debugger;
			return action.courses;

		default:
			return state;
	}
}