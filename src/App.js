import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      
      <HoverCounter name="Sunil"/>
      <ClickCounter name="Raju"/>
    </div>
  );
}

export default App;
