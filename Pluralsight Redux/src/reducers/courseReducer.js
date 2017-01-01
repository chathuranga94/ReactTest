import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
	switch(action.type){
		case types.CREATE_COURSE:
			debugger;
			return [...state,
				Object.assign({},action.course)
			];
			// Spread operator and immutability of store -> Object.assign
	
		default:
			return state;
	}
}