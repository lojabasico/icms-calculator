$(function(){
  var Tax = Backbone.Model.extend({
    defaults: function(){
      return{
        uf: null,
        imported_tax: null,
        national_tax: null,
        aliquot_tax: null
      }
    }
  });
});
