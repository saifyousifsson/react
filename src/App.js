import './App.css';
import CardGrid from './components/GardGrid';
import ListGroup from './components/ListGroup';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';


function App() {
  return (
    <div >
     
    <Navbar />
    <div className="container mt-5  align-items-center" >
      
      <TodoList />
     {/*<CardGrid />*/} 
     {/*<ListGroup />*/}
      
    </div>

    </div>
  );
}

export default App;
