import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStartPositionAction } from '../../store/PlayingField/actions';
import { selectIdGameCells, selectStartPosition } from '../../store/PlayingField/selectors';
import PlayingCell from '../PlayingCell/PlayingCell';
import styles from './PlayingField.module.css';

const PlayingField = () => {
	const idGameCells = useSelector(selectIdGameCells);
	const startPosition = useSelector(selectStartPosition);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(addStartPositionAction());
	}, [dispatch]);

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
