/**
 *     @author Harry Alexander Gómez <Alexander9710@hotmail.com>
 *     @fileOverview Ejercicio 3 Modulo 3
 *     @licence BSD 3-Clause License
 */


let productName = "";
let productType = "";
let quantity = "";
let price = "";
let latitude = "";
let longitude = "";
let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let emailLog = '';
let passLog = '';
let login = {};
let product = {};
let user = {};




const getProductDataForm = () => {
    productName = document.getElementById("productName").value;
    productType = document.getElementById("productType").value;
    quantity = document.getElementById("quantity").value;
    price = document.getElementById("price").value;
    latitude = document.getElementById("latitude").value;
    longitude = document.getElementById("longitude").value;
};

const getUserDataForm = () => {
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    lastname = document.getElementById("lastname").value;
    phone = document.getElementById("phone").value;
    pass = document.getElementById("pass").value;
    longitude = document.getElementById("longitude").value;
};
const getLoginDataForm = () => {
    emailLog = document.getElementById("emailLog").value;
    passLog = document.getElementById("passLog").value;

}

const buildProductDataForRequest = () => {
    product = {
        product_name: productName,
        product_type: productType,
        quantity: quantity,
        price: price,
        latitude: latitude,
        longitude: longitude
    };
    user = {
        email: email,
        name: name,
        quantity: quantity,
        lastname: lastname,
        phone: phone,
        pass: pass,
    };
    login = {
        emailLog: emailLog,
        passLog: passLog,

    };
};



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
