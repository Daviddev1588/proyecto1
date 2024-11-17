import { useState } from 'react';
import './App.css';
import { Buscador } from './Components/Buscador';
import { Crear } from './Components/Crear';
import { Listado } from './Components/Listado';

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
       
  <div className="layout">
      <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>Mis Peliculas</h1>
      </header>
      {/*Barra de navegacion*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contactos</a></li>
        </ul>
      </nav>
      {/*Contenido principal*/}
      <section id="content" className="content">
        {/*Aqui van el listado de peliculas*/}

        <Listado listadoState={listadoState} setListadoState={setListadoState}  />        

      </section>
      {/*Barra lateral*/}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState}/>
        

        <Crear  setlistadoState={setListadoState}/>
      </aside>

      
      {/*Pie de pagina*/}
      <footer className="footer">
        &copy;Master en javascript E12 y typescript-
        <a href="https://victorroblesweb.es">victorroblesweb.es</a>
      </footer>
    </div>
    
  );
}

export default App;
