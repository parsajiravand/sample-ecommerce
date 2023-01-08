const fs = require("fs");
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");
const formidable = require("formidable");
const _ = require("lodash");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    const product = new Product(fields);
    if (files.photo) {
      product.photo.data = fs.readFileSync(files.photo.filepath);
      product.photo.contentType = files.photo.mimetype;
    }
    product.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        data,
      });
    });
  });
};

exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    console.log(err);
    if (err || !product) {
      return res.status(400).json({
        error: "product not found",
      });
    }
    req.product = product;
    next();
  });
};

exports.read = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

exports.remove = (req, res) => {
  let product = req.product;

  product.remove((err, deletedPorduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Product deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    let product = req.product;
    product = _.extend(product, fields);

    if (files.photo) {
      product.photo.data = fs.readFileSync(files.photo.filepath);
      product.photo.contentType = files.photo.mimetype;
    }
    product.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({
        data,
      });
    });
  });
};
