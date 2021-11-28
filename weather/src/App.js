import logo from './logo.svg';
import './App.css';
import Main from './pages/index.jsx';
import { TempProvider } from './context/temp.provider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';

const theme= createTheme({

  palette:{
    primary:{
      main:'#24446D'
    },

    secondary:{
      main: '#FFFFFF'
     
    }
  }  
})

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <TempProvider value='metric'>
        <Main></Main>
      </TempProvider>
    </ThemeProvider>

      
    </div>
  );
}

export default App;
 