/**
 *     @author Harry Gómez <antixalex@gmail.com>
 *     @fileOverview ejercicio 4 modulo 3
 *     @licence BSD 3-Clause License
 */

let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};

const getProductDataForm = () => {
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    lastname = document.getElementById("lastname").value;
    phone = document.getElementById("phone").value;
    pass = document.getElementById("pass").value;
    longitude = document.getElementById("longitude").value;
};

const buildProductDataForRequest = () => {
    user = {
        email: email,
        name: name,
        quantity: quantity,
        lastname: lastname,
        phone: phone,
        pass: pass,
    };
};