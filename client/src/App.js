import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    check().then((data) => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  if(loading) {
    return <Spinner animation="grow"></Spinner>
  }

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default observer(App);
