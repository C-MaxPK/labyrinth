import ArrowWay from './Components/ArrowWay/ArrowWay';
import Header from './Components/Header/Header';
import PlayingField from './Components/PlayingField/PlayingField';
import './App.css';

function App() {

  return (
    <div className="app">
      <Header/>
      <PlayingField/>
      <ArrowWay/>
    </div>
  );
}

export default App;
