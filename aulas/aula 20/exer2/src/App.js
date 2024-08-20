import './App.css';
import Input1 from './components/componente1';
import Input2 from './components/componente2';
import ButtonLog from './components/componente3';

function App() {
  return (
    <div className="container">
      <div className="container2">
        <h1>Login</h1>
        <div className="container3">
          <h2>Username</h2>
          <Input1 />
          <h2>Password</h2>
          <Input2 className="input" />
        </div>
        <ButtonLog className="botao" />
      </div>
    </div>
  );
}

export default App;