/**
 *     @author Harry Gómez <antixalex@gmail.com>
 *     @fileOverview ejercicio 5 modulo 3
 *     @licence BSD 3-Clause License
 */


let email = '';
let pass = '';
let login = {};

const getLoginDataForm = () => {
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;

}

const buildLoginDataForRequest = () => {
    login = {
        email: email,
        pass: pass,

    };
};