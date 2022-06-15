import logo from './logo.svg';
import './App.css';
import TicTacToe from './TicTacToc/TicTacToe';
import Information from './Information/information';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/tictacto" element={ <TicTacToe /> } />
            <Route path="/information" element={ <Information /> } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
