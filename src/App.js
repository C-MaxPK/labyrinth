import { useDispatch, useSelector } from 'react-redux';
import ArrowWay from './Components/ArrowWay/ArrowWay';
import Header from './Components/Header/Header';
import PlayingField from './Components/PlayingField/PlayingField';
import { selectShowResult } from './store/PlayingField/selectors';
import { resetGameAction } from './store/PlayingField/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const viewResult = useSelector(selectShowResult);

  return (
    <div className="app">
      <Header/>
      <PlayingField/>
      {viewResult && <button className='btnAgain' onClick={() => dispatch(resetGameAction())}>Еще разок?</button>}
      <ArrowWay/>
    </div>
  );
}

export default App;
