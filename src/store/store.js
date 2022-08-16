import { configureStore } from '@reduxjs/toolkit';
import playingField from "./PlayingField/reducer";

const store = configureStore({
	reducer: {
		game: playingField,
	}
});

export default store;
