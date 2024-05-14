var Promise = require('bluebird');
var products = require('../mocks/product.json');

var jwt = require('jsonwebtoken');
var config = require('../middlewares/config.json');

var error = {error: "error"};

var getAllProducts = async function (){
    return new Promise(function(resolve, reject) {
        resolve(products); //ToDo: remove when the DB implemented
        reject(error);
    })
};

var createProduct = async function (productParam){ 
    return new Promise(function(resolve, reject) {
        resolve(products[0]);
        reject(error);
    });
};

var getProductByProductId = async function (productId){
    return new Promise(function(resolve, reject) {
        var product = {
            id: products[0].id,
            name: products[0].name,
            typeProduct: products[0].typeProduct,
            quantity: products[0].quantity,
            price: products[0].price,
            latitude: products[0].latitude,
            longitude: products[0].longitude,
            productId: productId,
            status: products[0].status

        };
        resolve(product);
        reject(error);
    });
};

var updateProductByProductId = async function(productId, productParam){
    return new Promise(function(resolve, reject) {   
    //ToDo: remove when the DB implemented     
    var productUpdate = {};
    productUpdate.productId = productId;
    productUpdate.name = productParam.name;
    productUpdate.typeProduct = productParam.typeProduct;
    productUpdate.id = productParam.id;
    productUpdate.quantity = productParam.quantity;
    productUpdate.price = productParam.price;
    productUpdate.latitude = productParam.latitude;
    productUpdate.longitude = productParam.longitude;
    productUpdate.status = productParam.status;

    resolve(productUpdate);
    reject(error);

});
};

var deleteProductByProductId = async function (productId){
    return new Promise((resolve, reject) => {
        resolve(); //ToDo: remove when the DB implemented
        reject(error);
    });
};

var authenticate = async ({productId}) => {
    return new Promise((resolve, reject) => {
      var orderAuth = products[0]; //ToDo: remove when the DB implemented
      orderAuth.token = jwt.sign(
        {
          sub:
            {
              productId: productId,
              name: orderAuth.name,
              typeProduct: orderAuth.typeProduct,
              locale: 'CO',
              roles: {
                is_admin: true,
                is_user: true
              }
            }
        },
        config.secret,
        {expiresIn: '1m'}
      );
  
      resolve(orderAuth);
    });
  };

module.exports = {
    getAllProducts,
    createProduct,
    getProductByProductId,
    updateProductByProductId,
    deleteProductByProductId,
    authenticate
};