import { ADD_END_POSITION, ADD_START_POSITION, SHOW_RESULT } from './actions';

const initialState = {
    idGameCells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		startPosition: 0,
		endPosition: 0,
		showResult: false
};

const playingField = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_START_POSITION:
			return {...state, startPosition: payload, showResult: false};
		case ADD_END_POSITION:
			return {...state, endPosition: payload};
		case SHOW_RESULT:
			return {...state, showResult: true};
		default:
			return state;
	}
};

export default playingField;
