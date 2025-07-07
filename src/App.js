import React from "react";

import { Routes, Route, Navigate, useLocation} from "react-router-dom";

import Footer from "./Componentes/Footer.js"
import Header from "./Componentes/Header.js"
import Main from "./Componentes/Main.js"
import "../src/Styles/app.css"

import Mural from "./Pages/Mural.jsx"
import Notificacao from "./Pages/Notificacao.jsx"
import Calendario from './Pages/Calendario.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'

import { NotificationsProvider } from "./Pages/NotificationsContext"; // <-- importe aqui

/*fuimport { NotificationsProvider } from "./Pages/NotificationsContext"; // <-- importe aqui
nction PrivateRoute({element}){
  const isLoggedIn = localStorage.getItem('usuarioLogado') === 'true';
  return(
    isLoggedIn ? element : <Navigate to="/login" />
  );
}*/

function App() {
  const location = useLocation();
  const esconderLayout = location.pathname === '/login';
  return(
  <NotificationsProvider>  
    <div className="app">
    {!esconderLayout && <Header />}
      <Main>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='/Calendario' element={<Calendario />}/>
          <Route path='/Mural' element={<Mural />}/>
          <Route path='/Notificacao' element={<Notificacao />}/>
        </Routes>
      </Main>
      {!esconderLayout && <Footer />}
    </div>
  </NotificationsProvider>

  );
    
}
export default App;
