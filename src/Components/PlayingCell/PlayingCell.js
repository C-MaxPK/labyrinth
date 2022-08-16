import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showResult, selectEndPosition, selectShowResult, addStartPosition } from '../../store/PlayingField/reducer';
import styles from './PlayingCell.module.css';

const PlayingCell = ({ id, isStartPosition }) => {
	const dispatch = useDispatch();
	const result = useSelector(selectShowResult);
	const endPosition = useSelector(selectEndPosition);
	const [showAnswer, setShowAnswer] = useState(null);

	useEffect(() => {
		if (!result) {
			setShowAnswer(null);
		} else if (id === endPosition) {
			if (showAnswer !== 'ВЕРНО') {
				setShowAnswer('верно ТУТ');
			}
			setTimeout(() => {
				dispatch(addStartPosition());
			}, 700);
		}
	}, [result]);

	const checkResult = () => {
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
