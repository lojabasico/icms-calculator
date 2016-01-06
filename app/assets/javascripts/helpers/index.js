modulejs.define('index_helper', function() {
  return {
    roundDecimal: function(num, dec) {
      return Math.ceil(num*Math.pow(10,dec))/Math.pow(10,dec)
    }
  }
});
