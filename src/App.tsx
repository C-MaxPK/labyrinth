import Header from './Components/Header/Header';
import PlayingField from './Components/PlayingField/PlayingField';
import ArrowWay from './Components/ArrowWay/ArrowWay';
import './App.css';

function App():JSX.Element {

  return (
    <div className="app">
      <Header/>
      <PlayingField/>
      <ArrowWay/>
    </div>
  );
}

export default App;
