import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Calculadora from './components/pageCalc';
import Contador from './components/pageCounter';
import Button from './components/pageButton';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculadora/>}/>
        <Route path='/contador'element={<Contador/>}/>
        <Route path='/button'element={<Button/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
