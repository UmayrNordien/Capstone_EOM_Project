const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const { User, Product, Order, Cart } = require('../model');
const user = new User();
const product = new Product();
const order = new Order();
const cart = new Cart();

router.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

// =========USER's Router========
// Login
router.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
});
// View all users
router.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// View single user
router.get('/user/:id', 
(req, res)=> {
    user.fetchUser(req, res);
});
// Update users
router.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Register user
router.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
});
// Delete user
router.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

// =====Products======
// View all products
router.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
});
// View a single product
router.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
});
// Update a product
router.put('/product/:id', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
});
// Create a new product
router.post('/product', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
});
// Delete a product
router.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
});

// =====Orders======
// View all orders
router.get('/orders', (req, res)=> {
    order.fetchOrders(req, res);
});
// View a single order
router.get('/orders/:id', 
(req, res)=> {
    order.fetchOrder(req, res);
});
// Update an order
router.put('/order/:id', 
bodyParser.json(),
(req, res)=> {
    order.updateOrder(req, res);
});
// Create a new order
router.post('/order', 
bodyParser.json(), 
(req, res)=> {
    order.addOrder(req, res);
});
// Delete an order
router.delete('/order/:id', 
(req, res)=> {
    order.deleteOrder(req, res);
});

// // =====Cart======
// // View the contents of a cart for a given user ID
// router.get('/cart/:id', (req, res) => {
//   cart.fetchCart(req, res);
// });
// // Add an item to a cart for a given user ID
// router.post('/cart', bodyParser.json(), (req, res) => {
//   cart.addCart(req, res);
// });
// // Update the quantity of an item in a cart for a given user ID
// router.put('/cart/:id', bodyParser.json(), (req, res) => {
//   cart.updateCart(req, res);
// });
// // Delete an item from a cart for a given user ID
// router.delete('/cart/:id', (req, res) => {
//   cart.deleteItemCart(req, res);
// });
// // Delete a cart for a given user ID
// router.delete('/cart/clear/:id', (req, res) => {
//   cart.deleteCart(req, res);
// });

module.exports = router;