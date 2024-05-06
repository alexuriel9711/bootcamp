/**
 *     @author Harry Gómez <antixalex@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

let nombre = null;
let apellido = null;
let email = null;
let tel = null;
let pass = null;
let user = {};

const dataStringCapitalize = (data) => {
    let capitalize = null;
    if (data !== null && data !== undefined && data !== "") {
        capitalize = data[0].toUpperCase() + data.slice(1).toLowerCase();
    }
    return capitalize;
}



const promiseForSanitizeData = (data) => {
    let capitalize = {};
    return new Promise((resolve, reject) => {
        nombre = dataStringCapitalize(data.nombre);
        apellido = dataStringCapitalize(data.apellido);
        email = data.email;
        tel = data.tel;
        pass = data.passCapitalize;
        resolve();
    })
}
 
//Prepara la informacion para enviar

const promiseBuildData = () =>{
    return new Promise((resolve, reject) => {
        
        user = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            tel: tel,
            pass
        };
        resolve();
    })
}

//obtener data

const sendLocalStorage = () => {
    localStorage.setItem("userData", JSON.stringify(user));
};


const getPromiseDataFormRegUser = () => {
    return new Promise((resolve, reject) => {
        const nomCapitalize = document.getElementById("nombre").value;
        const apellidoCapitalize = document.getElementById("apellido").value;
        const emailCapitalize = document.getElementById("email").value;
        const telCapitalize = document.getElementById("tel").value;
        const passCapitalize = document.getElementById("pass").value;
        const userForm = {
            nombre: nomCapitalize,
            apellido: apellidoCapitalize,
            email: emailCapitalize,
            tel: telCapitalize,
            pass: passCapitalize
        };
        resolve(userForm);
    });
};



const getDataFormRegUser = () =>{
    getPromiseDataFormRegUser().then((result) => {
        return promiseForSanitizeData(result);
    }).then((result) => {
        return promiseBuildData();
    }).then((result) =>{
        return sendLocalStorage(result);
    }).catch((error) => {
        throw new error(error);
    });
}