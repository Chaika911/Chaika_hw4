import Counter from '../Counter/Counter';
import CounterModified from '../CounterModified/CounterModified';
import ShowComponent from '../ShowComponent/ShowComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <ShowComponent />

        <Counter />

        <CounterModified />
      </header>
    </div>
  );
}

export default App;
