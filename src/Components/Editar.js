import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
      e.preventDefault();
      //CONSEGUIR EL TARGET DEL EVENTO
      let target = e.target;

      //BUSCAR EL INDICE DEL OBJECTO DE LA PELICULA A ACTUALIZAR.
      const pelis_almacenadas = conseguirPeliculas();
      const indice = pelis_almacenadas.findIndex( peli => peli.id === id);

      //CREAR OBJECTO CON ESE INDICE

      let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      };
    //ACTUALIZAR EL ELEMENTO CON ESE INDICE
    pelis_almacenadas[indice] = peli_actualizada;
    //GUARDAR EL NUEVO ARRAY DEL OBJECTO EN EL LOCALSTORAGE
      localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
    //ACTUALIZAR ESTADOS
    setListadoState(pelis_almacenadas);
    setEditar(0);

    }

  return (
    <div className='edit_form'>
      
       <h3 className='title'>{titulo_componente}</h3>
       <form onSubmit={ e => guardarEdicion (e, peli.id)}>
        <input type="text"
               name="titulo"
               className="titulo_editado"
               defaultValue={peli.titulo} /><br/><br/>
        <textarea 
                 name="descripcion"
                 defaultValue={peli.descripcion}
                 className="descripcion_editada" /><br/><br/>
        <input type="submit" className="editar" value="Actualizar"/>
       </form>
  </div>
  )
}


