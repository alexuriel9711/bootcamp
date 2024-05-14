var express = require('express');
var router = express.Router();
var userService = require('../services/users');
var verifyToken = require("../middlewares/authMiddleware");

var getAllProducts = function(req, res, next){
  userService.getAllProducts()
    .then(products => res.json(products))
    .catch(err => next(err));
}

var createProduct = function(req, res, next){
  userService.createProduct(req.body)
    .then((product) => res.status(201).json(product))
    .catch(err => next(err));
}

var getProductByProductId = function (req, res, next){
  userService.getProductByProductId(req.params.productId)
    .then((product) => res.json(product))
    .catch(err => next(err));
}

var updateProductByProductId = function (req, res, next){
  userService.updateProductByProductId(req.params.productId, req.body)
    .then((product) => res.json(product))
    .catch(err => next(err));
}

var deleteProductByProductId = (req, res, next) => {
  userService.deleteProductByProductId(req.params.productId)
    .then(() => res.sendStatus(204))
    .catch(err => next(err));
}

var authenticate = (req, res, next) =>{
  userService.authenticate(req.body)
  .then(product => res.json(product));
};



router.get('/', verifyToken, getAllProducts);
router.post('/create', createProduct);
router.delete('/:productId/delete', verifyToken,  deleteProductByProductId);
router.put('/:productId/update', verifyToken, updateProductByProductId);
router.get('/:productId/detail', verifyToken, getProductByProductId);
router.post('/authenticate', authenticate);

module.exports = router;
