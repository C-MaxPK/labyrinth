import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addEndPosition, selectStartPosition } from '../../store/PlayingField/reducer';
import CellForArrowWay from '../CellForArrowWay/CellForArrowWay';
import styles from './ArrowWay.module.css';

export enum CellsId {
	UP = 'up',
	RIGHT = 'right',
	DOWN = 'down',
	LEFT = 'left'
}

const ArrowWay = () => {
	const dispatch = useAppDispatch();
	const startPosition = useAppSelector<number>(selectStartPosition);
	
	const cellsId: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let currentPosition: number = startPosition;

	const getRandomDirection = (id: number): string => {
		const direction: Array<string> = [CellsId.UP, CellsId.RIGHT, CellsId.DOWN, CellsId.LEFT];
		const randomValue: string = direction[Math.floor(direction.length * Math.random())];

		if (randomValue === CellsId.UP && (currentPosition !== 1 && currentPosition !== 2 && currentPosition !== 3)) {
			currentPosition = currentPosition - 3;
		} else if (randomValue === CellsId.RIGHT && (currentPosition !== 3 && currentPosition !== 6 && currentPosition !== 9)) {
			currentPosition = currentPosition + 1;
		} else if (randomValue === CellsId.DOWN && (currentPosition !== 7 && currentPosition !== 8 && currentPosition !== 9)) {
			currentPosition = currentPosition + 3;
		} else if (randomValue === CellsId.LEFT && (currentPosition !== 1 && currentPosition !== 4 && currentPosition !== 7)) {
			currentPosition = currentPosition - 1;
		} else {
			return getRandomDirection(id);
		}

		if (id === 10  && startPosition !== 0) {
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
