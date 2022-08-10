import styles from './CellForArrowWay.module.css';
import { TbArrowBigLeft, TbArrowBigTop, TbArrowBigRight, TbArrowBigDown } from "react-icons/tb";

const CellForArrowWay = ({ direction }) => {
	
	return (
		<div className={styles.cell}>
			{direction === 'left' && <TbArrowBigLeft size='2em'/>}
			{direction === 'up' && <TbArrowBigTop size='2em'/>}
			{direction === 'right' && <TbArrowBigRight size='2em'/>}
			{direction === 'down' && <TbArrowBigDown size='2em'/>}
		</div>
	);
};

export default CellForArrowWay;
