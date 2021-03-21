import './App.css';
import C from './components/C';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import RenderProps from './components/RenderProps';
import {UserProvider} from './components/UserContext';

function App() {
  return (

    /* higher order components
    <div className="App">
    
      <HoverCounter name="Sunil"/>
      <ClickCounter name="Raju"/>
    </div>
    /*

    /* render props basic example
    //<RenderProps name={(isLoggedIn)=>isLoggedIn? 'Sunil Prajapat':'Guest'}/>

    <Counter render={(counter,incrementCount)=>(<ClickCounterTwo counter={counter} incrementCount={incrementCount}/>)}/>
     */

    /* context */
    // <UserProvider value="Sunil Pie">
    //   <C/>
    // </UserProvider>

    /* context default value usage
    <C/>
    */

    /* Http request */

    //GET
    //<PostList/>

    //POST
    <PostForm/>
    );
}

export default App;
