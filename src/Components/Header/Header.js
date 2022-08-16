import { memo } from 'react';
import styles from './Header.module.css';

const Header = () => {

	return (
		<div className={styles.title}>
			Игра "Лабиринт"
		</div>
	);
};

export default memo(Header);
