import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PlayingField {
  idGameCells: Array<number>;
  startPosition: number;
  endPosition: number;
  showResult: boolean;
}

const initialState: PlayingField = {
    idGameCells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		startPosition: 0,
		endPosition: 0,
		showResult: false
};

export const playingField = createSlice({
  name: 'playingField',
  initialState,
  reducers: {
    addStartPosition: (state) => {
			const min = Math.ceil(1);
			const max = Math.floor(9);
			const startPosition = Math.floor(Math.random() * (max - min + 1)) + min;

			state.startPosition = startPosition;
			state.endPosition = 0;
			state.showResult = false;
		},
    addEndPosition: (state, {payload}) => {
      state.endPosition = payload;
    },
    showResult: (state) => {
      state.showResult = true;
    },
  }
});

export const { addStartPosition, addEndPosition, showResult } = playingField.actions;

export const selectIdGameCells = (state: RootState) => state.game.idGameCells;
export const selectStartPosition = (state: RootState) => state.game.startPosition;
export const selectEndPosition = (state: RootState) => state.game.endPosition;
export const selectShowResult = (state: RootState) => state.game.showResult;

export default playingField.reducer;
