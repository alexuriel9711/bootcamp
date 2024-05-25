var db = require('../config/db');
var Product = db.Product;

// Obtener todos los productos
var getAllProducts = async function () {
  return await Product.find().select('name product_type quantity price latitude longitude status id').exec();
};

// Crear un nuevo producto
var createProduct = async function (productParam) {
  if (productParam === undefined || await Product.findOne({ name: productParam.name })) {
    throw { code: 409, message: 'Product ' + productParam.name + ' is already taken' };
  }
  var product = new Product(productParam);
  product.status = true;
  await product.save();

  return getProductByName(productParam.name);
};

// Obtener un producto por nombre
var getProductByName = async function (name) {
  var product = await Product.findOne({ name: name })
    .select('name type_product quantity price latitude longitude status id').exec();

  if (!product) {
    throw { code: 404, message: 'Product ' + name + ' does not exist' };
  }

  return product;
};

// Actualizar un producto por nombre
var updateProductByName = async function (name, productParam) {
  var productForUpdate = await Product.findOne({ name: name, status: true });

  if (!productForUpdate) {
    throw { code: 404, message: 'Product ' + name + ' does not exist' };
  }

  var productUpdatedResult = await Product.findByIdAndUpdate(productForUpdate.id,
    {
      name: productParam.name,
      product_type: productParam.product_type,
      quantity: productParam.quantity,
      price: productParam.price,
      latitude: productParam.latitude,
      longitude: productParam.longitude
    },
    { new: true }
  );

  if (productUpdatedResult && productUpdatedResult.errors) {
    throw { code: 400, message: productUpdatedResult.errors };
  }

  return getProductByName(productForUpdate.name);
};

// Eliminar un producto por nombre
var deleteProductByName = async function (name) {
  var productForSoftDelete = await Product.findOne({ name: name, status: true });

  if (!productForSoftDelete) {
    throw { code: 404, message: 'Product ' + name + ' does not exist' };
  }

  var productSoftDeleteResult = await Product.findByIdAndUpdate(productForSoftDelete.id,
    { status: false });

  if (productSoftDeleteResult && productSoftDeleteResult.errors) {
    throw { code: 400, message: productSoftDeleteResult.errors };
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductByName,
  updateProductByName,
  deleteProductByName
};
