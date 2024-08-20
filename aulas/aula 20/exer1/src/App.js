import './App.css';
import Welcome from './components/componente1';
import Input from './components/componente2';
import Button from './components/componente3';


function App() {
  return (
    <div className="App">
      <Welcome name="Cíntia"/>

      <form>
        <Input/>
      </form>
      
      <Button/>
    </div>
  );
}

export default App;
