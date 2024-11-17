import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        console.log("Componentes del listado de peliculas cargado");
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        //CONSEGUIR PELICULAS ALMACENADAS
        let pelis_almacenadas = conseguirPeliculas();        

        //FILTRAR PELICULAS ALMACENADAS
        let nuevo_array_Pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

       
        //ACTUALIZAR ESTADOS DEL LISTADO
        setListadoState(nuevo_array_Pelis);

        //ACTUALIZAR LOS DATOS EN EL LOCALSTORAGE
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_Pelis));
    }

  return (
    <>

    {listadoState != null ? 
        listadoState.map(peli => {
            return(
            <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            

            <button className="edit" onClick={ () => { setEditar(peli.id)}}>Editar</button>
            <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>
            

            {/*APARECE UN FORMULARIO DE EDITAR*/}
            {editar === peli.id && (
               <Editar peli={peli}
                       conseguirPeliculas={conseguirPeliculas}
                       setEditar={setEditar}
                       setListadoState={setListadoState}       
                />
            )}

        </article>
        );        
       
    })
    
    : <h2>No hay peliculas para mostrar</h2>
}

    </>
  )
}
