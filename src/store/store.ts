import { configureStore } from '@reduxjs/toolkit';
import playingField from "./PlayingField/reducer";

const store = configureStore({
	reducer: {
		game: playingField,
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
