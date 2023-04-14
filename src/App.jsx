import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting={"El mejor E-Commerce del Argntina"}/>

    </div>
  );
}

export default App;
