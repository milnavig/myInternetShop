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
import Chat from './components/Chat';

function App() {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      check().then((data) => {
        user.setUser(data); // changed
        user.setIsAuth(true);
      }).finally(() => {
        setLoading(false);
      })
    } else {
      setLoading(false);
    }
  }, []);

  if(loading) {
    return (
      <div className="row d-flex justify-content-center align-content-center" style={{height: 300}}> 
        <Spinner animation="border"></Spinner>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
      <Footer></Footer>
      <Chat></Chat>
    </BrowserRouter>
  );
}

export default observer(App);
