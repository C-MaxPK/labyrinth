import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addStartPosition, selectIdGameCells, selectStartPosition } from '../../store/PlayingField/reducer';
import PlayingCell from '../PlayingCell/PlayingCell';
import styles from './PlayingField.module.css';

const PlayingField = (): JSX.Element => {
	const idGameCells = useAppSelector<Array<number>>(selectIdGameCells);
	const startPosition = useAppSelector<number>(selectStartPosition);
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch(addStartPosition());
	}, []);

	return (
		<div className={styles.playingField}>
			{idGameCells.map(id => 
				<PlayingCell
					key={id}
					id={id}
					isStartPosition={id === startPosition}
				/>
			)}
		</div>
	);
};

export default PlayingField;
