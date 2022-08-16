import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStartPosition, selectIdGameCells, selectStartPosition } from '../../store/PlayingField/reducer';
import PlayingCell from '../PlayingCell/PlayingCell';
import styles from './PlayingField.module.css';

const PlayingField = () => {
	const idGameCells = useSelector(selectIdGameCells);
	const startPosition = useSelector(selectStartPosition);
	const dispatch = useDispatch();
	
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
