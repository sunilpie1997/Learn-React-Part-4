import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter from './components/Counter';
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
    //<RenderProps name={(isLoggedIn)=>isLoggedIn? 'Sunil Prajapat':'Guest'}/>

    <Counter render={(counter,incrementCount)=>(<ClickCounterTwo counter={counter} incrementCount={incrementCount}/>)}/>
  );
}

export default App;
