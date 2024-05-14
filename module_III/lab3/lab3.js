/**
 *     @author Harry Alexander Gómez <Alexander9710@hotmail.com>
 *     @fileOverview Ejercicio 3 Modulo 3
 *     @licence BSD 3-Clause License
 */


let productName = null;
let productType = null;
let quantity = null;
let price = null;
let latitude = null;
let longitude = null;
let product = {};

const getPromiseProductDataForRequest = () => {; 
  return new Promise((resolve, reject) => {
    const productName = document.getElementById("productName").value;
    const productType = document.getElementById("productType").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    resolve({
      productName: productName,
      productType: productType,
      quantity: quantity,
      price: price,
      latitude: latitude,
      longitude: longitude
    });
  });
}
const promiseForSanitizeData = (data) => {
  return new Promise((resolve, reject) => {
    productName = data.productName;
    productType = data.productType;
    quantity = data.quantity;
    price = data.price;
    latitude = data.latitude;
    longitude = data.longitude;
    resolve();
  });
};
const buildData = data => {
  let buildData = null;

  if (data !== null && data !== undefined) {
    buildData = {
      productName: data.productName,
      productType: data.productType,
      quantity: data.quantity,
      price: data.price,
      latitude: data.latitude,
      longitude: data.longitude
    }
  }
  
  return buildData;
};
const promiseBuildData = () =>{
  return new Promise((resolve, reject) => {
    product = buildData ({productName: productName, productType: productType, quantity: quantity, price: price, latitude: latitude, longitude: longitude});
    resolve(product);
  });
};


const getDataFormMyForm = () => {
  getPromiseProductDataForRequest()
    .then(result => {
      return promiseForSanitizeData(result);
    })
    .then(result => {
      return promiseBuildData(result);
    })
    .then(result => {
      console.log(result); 
    });
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


