import logo from './logo.svg';
import './App.css';
import Welcome from './componente1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button></button>
        <div>
          <p>Bem vindo ao React!</p>
          <Welcome name= "Cíntia" />
          <Welcome name= "Joseph" />
        </div>
        <p>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
