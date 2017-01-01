export default function courseReducer(state = [], action){
	switch(action.type){
		case 'CREATE_COURSE':
			debugger;
			return [...state,
				Object.assign({},action.course)
			];
			// Spread operator and immutability of store -> Object.assign
	
		default:
			return state;
	}
}