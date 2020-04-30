const routes = require('next-routes');

module.exports = routes()
  .add('/', 'home')
  .add('/:type', 'category')
  .add('/:type/:id', 'product');
