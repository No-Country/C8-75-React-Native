import { OBTENER_ACCESO, SIGN_OUT } from "./actionTypes";

const LogIn = (payload) => {
    //NOTA: COMO ARGUMENTO DEBERIA HABER UN PAYLOAD QUE DEBERIA CONTENER EL CORREO Y CONTRASEÑA DEL USUARIO (EN UN OBJETO)
    //ACA DEBERÍA TOMAR UNA PROMESA QUE NOS DEVUELVA UN JSON DE SI PASO O NO 
    //POR AHORA LO TRABAJARÉ TODO SINCRONO ,SIN LLAMADAS DE APIS, NI PEDIDA DE PAYLOAD

    return ({type: OBTENER_ACCESO, payload: payload})    
}

const SignIn = ( ) => {

}

const SignOut = ( ) => {
    //DEBE ELIMINAR EL TOKEN
    return({type: SIGN_OUT})
}

export {LogIn, SignIn, SignOut}