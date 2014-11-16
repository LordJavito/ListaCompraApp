angular.module('app.services', [])

/**
 * A simple example service that returns some data.
 */
 angular.module('app.services', [])
  .factory('Data', function() {
    // Might use a resource here that returns a JSON array
    var productosEnCesta = [];

    return {
      add: function(nombreProducto) {
        productosEnCesta.push(nombreProducto);
        /*console.log(nombreProducto);*/
      },
      get: function() {
        // Simple index lookup
        return productosEnCesta;
      }
    }
  });
