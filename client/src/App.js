import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
