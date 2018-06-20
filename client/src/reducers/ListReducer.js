import { SAVE_LIST } from '../actions'

const ListReducer = (state=[], action) => {
	switch (action.type) {
		case SAVE_LIST:
			return [...state, action.payload];

		default:
			return state;
	}
	
	return state;
}

export default ListReducer;