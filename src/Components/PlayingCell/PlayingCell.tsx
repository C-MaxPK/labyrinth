import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showResult, selectEndPosition, selectShowResult, addStartPosition } from '../../store/PlayingField/reducer';
import styles from './PlayingCell.module.css';

interface PlayingCellProps {
	id: number;
	isStartPosition: boolean;
}

const PlayingCell = ({ id, isStartPosition }: PlayingCellProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const result = useAppSelector<boolean>(selectShowResult);
	const endPosition = useAppSelector<number>(selectEndPosition);
	const [showAnswer, setShowAnswer] = useState<string>('');

	useEffect(() => {
		if (!result) {
			setShowAnswer('');
		}
		if (id === endPosition) {
			if (showAnswer !== 'ВЕРНО') {
				setShowAnswer('верно ТУТ');
			}
			setTimeout(() => {
				dispatch(addStartPosition());
			}, 700);
		}
	}, [result]);

	const checkResult = (): void => {
		if (id === endPosition) { 
			setShowAnswer('ВЕРНО');
		} else {
			setShowAnswer('НЕ верно');
		};

		dispatch(showResult());
	};

	return (
		<div className={styles.cell} onClick={checkResult}>
			<div className={styles.answer}>
				{result && showAnswer}
			</div>
			{isStartPosition  && <div className={styles.start}>СТАРТ</div>}
		</div>
	);
};

export default PlayingCell;
