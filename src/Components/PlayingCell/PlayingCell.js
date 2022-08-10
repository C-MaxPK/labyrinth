import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showResultAction } from '../../store/PlayingField/actions';
import { selectEndPosition, selectShowResult } from '../../store/PlayingField/selectors';
import styles from './PlayingCell.module.css';

const PlayingCell = ({ id, isStartPosition }) => {
	const dispatch = useDispatch();
	const showResult = useSelector(selectShowResult);
	const endPosition = useSelector(selectEndPosition);
	const [showAnswer, setShowAnswer] = useState(null);

	useEffect(() => {
		if (!showResult) {
			setShowAnswer(null);
		} else if (id === endPosition) {
			if (showAnswer !== 'ВЕРНО') {
				setShowAnswer('верно ТУТ');
			}
		}
	}, [showResult]);

	const checkResult = () => {
		if (id === endPosition) { 
			setShowAnswer('ВЕРНО');
		} else {
			setShowAnswer('НЕ верно');
		};

		dispatch(showResultAction());
	};

	return (
		<div className={styles.cell} onClick={checkResult}>
			<div className={styles.answer}>
				{showResult && showAnswer}
			</div>
			{isStartPosition  && <div className={styles.start}>СТАРТ</div>}
		</div>
	);
};

export default PlayingCell;
