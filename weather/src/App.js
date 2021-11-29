import logo from './logo.svg';
import './App.css';
import Main from './pages/index.jsx';
import { TempProvider } from './context/temp.provider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { dark } from '@mui/material/styles/createPalette';
import aeonik from './static/assets/TIPOGRAFIA/Aeonik-Bold.woff';
import aeonik_regular from './static/assets/TIPOGRAFIA/Aeonik-Regular.woff';
import { CssBaseline } from '@mui/material';
const theme= createTheme({
  typography: {
    fontFamily: ['"aeonik"','"aeonik_regular"','Arial'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'aeonik';
          src: local('aeonik'), url(${aeonik}) format('truetype');
        }
        @font-face {
          font-family: 'aeonik_regular';
          src: local('aeonik_regular'), url(${aeonik_regular}) format('truetype');
        }
      `,
    },
  },

  palette:{
    primary:{
      main:'#24446D'
    },

    secondary:{
      main: '#D69200'
     
    }
  }  
})

function App() {
  return (
    <div >
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <TempProvider value='metric'>
        <Main></Main>
      </TempProvider>
    </ThemeProvider>

      
    </div>
  );
}

export default App;
 