import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuarfarEnStorage';

export const Crear = ({setlistadoState}) => {

    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo,descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();
        //CONSEGUIR DATOS DEL FORMULARIO

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        
        //CREAR OBJECTO DE LA PELICULA

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        //GUARDAR ESTADO
        setPeliState(peli);

        //ACTUALIZAR EL ESTADO DEL LISTADO PRINCIPAL
        setlistadoState(elementos => {
            return [...elementos, peli];
        });

        //GUARDAR EN EL ALMACENAMIENTO LOCAL
        GuardarEnStorage("pelis", peli);
        
    }



  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>
        {(titulo,descripcion) && "Has creado la pelicula: "+titulo}
        </strong>
        

        <form onSubmit={conseguirDatosForm}>
            <input type="text"
                   id="titulo"
                   name="titulo"
                   placeholder="titulo" />
            <textarea id="descripcion"
                      name="descripcion" 
                      placeholder="Descripcion"></textarea>
            <input type="submit" 
                   id="save" 
                   value="Guardar" />
        </form>
     </div>
  )
}
