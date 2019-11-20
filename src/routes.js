const routes = require('express').Router();
const authController = require('./controllers/authController');
const productsController = require('./controllers/productsController')

// routes.post('/users', authController.users)

// routes.get('/index', authController.index)

routes.post('/products', productsController.store)

routes.get('/products', productsController.list)

routes.get('/products/:id', productsController.show)

routes.put('/products/:id', productsController.update)

routes.delete('/products/:id', productsController.destroy)

module.exports = routes