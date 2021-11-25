import logo from './logo.svg';
import './App.css';
import Prueba from './components/pruebas.jsx';
import Main from './pages/index.jsx';
import { TempProvider } from './context/temp.provider';

function App() {
  return (
    <div className="App">
      <TempProvider>
        <Main></Main>
      </TempProvider>

      
    </div>
  );
}

export default App;
