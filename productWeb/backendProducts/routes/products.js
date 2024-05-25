var express = require('express');
var router = express.Router();
var productService = require('../services/products');
var verifyToken = require("../middlewares/authMiddleware");


var getAllProducts = function (req, res, next) {
  productService.getAllProducts()
    .then(products => res.json(products))
    .catch(err => next(err));
};

var createProduct = function (req, res, next) {
  productService.createProduct(req.body)
    .then((product) => res.status(201).json(product))
    .catch(err => res.status(409).json(err));
};


var getProductByName = function (req, res, next) {
  productService.getProductByName(req.params.name)
    .then((product) => res.status(200).json(product))
    .catch(err => res.status(404).json(err));
}



var updateProductByName = function (req, res, next) {
  productService.updateProductByName(req.params.name, req.body)
    .then((product) => res.json(product))
    .catch(err => res.status(404).json(err));
};


var deleteProductByName = (req, res, next) => {
  productService.deleteProductByName(req.params.name)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(404).json(err));
};

/*
var authenticate = (req, res, next) => {
  productService.authenticate(req.body)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
};
*/

router.get('/',  getAllProducts);
router.post('/create', createProduct);
router.delete('/:name/delete', deleteProductByName);
router.put('/:name/update', updateProductByName);
//router.get('/:name/detail',  getProductByName);
router.get('/:name',  getProductByName);
//router.post('/authenticate', authenticate);

module.exports = router;