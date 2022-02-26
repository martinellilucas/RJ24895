
export const validar = (values) => {

    if (values.nombre.length < 2) {
        alert ("El nombre es demasiado corto")
        return
    }
    if (values.email.length < 5){
        alert ("El email es demasiado corto")
        return
    }
    if (values.tel.length < 8){
        alert ("El telefono ingresado es demasiado corto")
        return
    }

    return true
}
