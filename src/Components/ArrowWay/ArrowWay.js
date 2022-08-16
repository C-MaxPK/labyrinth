import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEndPosition, selectStartPosition, selectEndPosition } from '../../store/PlayingField/reducer';
import CellForArrowWay from '../CellForArrowWay/CellForArrowWay';
import styles from './ArrowWay.module.css';

const ArrowWay = () => {
	const dispatch = useDispatch();
	const startPosition = useSelector(selectStartPosition);
	const endPosition = useSelector(selectEndPosition);
	let currentPosition = startPosition;

	const cellsId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const getRandomDirection = (id) => {
		const direction = ['up', 'right', 'down', 'left'];
		const randomValue = direction[Math.floor(direction.length * Math.random())];

		if (randomValue === 'up' && (currentPosition !== 1 && currentPosition !== 2 && currentPosition !== 3)) {
			currentPosition = currentPosition - 3;
		} else if (randomValue === 'right' && (currentPosition !== 3 && currentPosition !== 6 && currentPosition !== 9)) {
			currentPosition = currentPosition + 1;
		} else if (randomValue === 'down' && (currentPosition !== 7 && currentPosition !== 8 && currentPosition !== 9)) {
			currentPosition = currentPosition + 3;
		} else if (randomValue === 'left' && (currentPosition !== 1 && currentPosition !== 4 && currentPosition !== 7)) {
			currentPosition = currentPosition - 1;
		} else {
			return getRandomDirection(id);
		}

		if (id === 10  && startPosition !== 0 /* && endPosition === 0 */) {
				dispatch(addEndPosition(currentPosition));
		}

		return randomValue;
	};

	return (
		<div className={styles.arrowWay}>
			{cellsId.map(id => 
				<CellForArrowWay
					key={id}
					direction={getRandomDirection(id)}
				/>
			)}
		</div>
	);
};

export default memo(ArrowWay);
