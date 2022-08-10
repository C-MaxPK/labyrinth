export const ADD_START_POSITION = 'ADD_START_POSITION';
export const ADD_END_POSITION = 'ADD_END_POSITION';
export const SHOW_RESULT = 'SHOW_RESULT';

export const addStartPositionAction = () => {
	const min = Math.ceil(1);
	const max = Math.floor(9);
	const startPosition = Math.floor(Math.random() * (max - min + 1)) + min;

	return {
		type: ADD_START_POSITION,
		payload: startPosition,
	}
};

export const addEndPositionAction = (endPosition) => ({
  type: ADD_END_POSITION,
  payload: endPosition,
});

export const showResultAction = () => ({
  type: SHOW_RESULT
});

export const resetGameAction = () => dispatch => {
	dispatch(addStartPositionAction());
};
