import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const BuscarPeli = (e) => {
    //CREAR LISTADO Y ACTUALIZARLO
   setBusqueda(e.target.value);
  
   //FILTRAR PARA BUSCAR CONCIDENCIAS
   let pelis_encontradas = listadoState.filter(peli => {
        return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
   });

    if (busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);     
    }else{
      setNoEncontrado(false);
    }

    
    //ACTUALIZAR ESTADO DEL LISTADO PRINCIPAL
    setListadoState(pelis_encontradas);
  }

  return (
    <div className="search">
        <h3 className="title">Buscador:{busqueda}</h3>
        {(noEncontrado== true && busqueda.length > 1 ) &&   (
          <spam className='no-encontrado'>No se a encontrado ninguna concidencia.</spam>
        )}
        <form>
            <input type="text"
                   id="search_field"
                   name="busqueda"
                   autoComplete='of'
                   onChange={BuscarPeli} />
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
