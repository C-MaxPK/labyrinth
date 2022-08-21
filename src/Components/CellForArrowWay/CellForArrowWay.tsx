import { TbArrowBigLeft, TbArrowBigTop, TbArrowBigRight, TbArrowBigDown } from "react-icons/tb";
import { CellsId } from '../ArrowWay/ArrowWay';
import styles from './CellForArrowWay.module.css';

interface CellForArrowWayProps {
	direction: string;
}

const CellForArrowWay = ({ direction }: CellForArrowWayProps) => {
	
	return (
		<div className={styles.cell}>
			{direction === CellsId.LEFT && <TbArrowBigLeft size='2em'/>}
			{direction === CellsId.UP && <TbArrowBigTop size='2em'/>}
			{direction === CellsId.RIGHT && <TbArrowBigRight size='2em'/>}
			{direction === CellsId.DOWN && <TbArrowBigDown size='2em'/>}
		</div>
	);
};

export default CellForArrowWay;
