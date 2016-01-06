modulejs.define('taxes', ['tax'], function(Tax) {
  var Taxes = Backbone.Collection.extend({
    model: Tax
  });

  return Taxes;
})
