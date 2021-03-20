import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import RenderProps from './components/RenderProps';

function App() {
  return (

    /* higher order components
    <div className="App">
    
      <HoverCounter name="Sunil"/>
      <ClickCounter name="Raju"/>
    </div>
    /*

    /* render props basic example */
    <RenderProps name={(isLoggedIn)=>isLoggedIn? 'Sunil Prajapat':'Guest'}/>
  );
}

export default App;
