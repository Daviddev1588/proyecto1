export const GuardarEnStorage = (clave, elemento) => {
    //CONSEGUIR LOS ELEMENTOS QUE YA TENEMOS EN EL LOCALSTORAGE
    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);

    //COMPROBAR SI ES UN ARRAY
    if (Array.isArray(elementos)) {
        //AÑADIR EN EL ARRAY UN ELEMENTO NUEVO
        elementos.push(elemento);            
    } else {
        //CREAR UN ARRAY CON LA NUEVA ELEMENTO
        elementos = [elemento];
        
    }
    //GUARDAR EN EL LOCALSTORAGE
    localStorage.setItem(clave, JSON.stringify(elementos));

    //DEVOLVER OBJECTO GUARDADO
    return elemento;

    
}