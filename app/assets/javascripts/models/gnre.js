modulejs.define('gnre', ['jquery', 'taxes_instance', 'index_helper'], function($, Ufs, Helper) {
  return {
    calculate: function(quota, total, total_discount, imported_value, national_value, uf_to, uf_from) {
      var total = $(".total").val().replace(",",".");
      var total_discount = total_discount.replace(",",".");
      var imported_value = imported_value.replace(",",".");
      var national_value = national_value.replace(",",".");

      var quote_national = 0;
      var quote_imported = 0;

      if(total_discount > 0) {
        console.log("Using discount", imported_value, total_discount, total);
        quote_national = national_value*total_discount/total;
        quote_imported = imported_value*total_discount/total;
      } else {
        console.log("Not Using discount");
        quote_national = national_value;
        quote_imported = imported_value;
      }

      var gnre_national = 0;
      var gnre_imported = 0;

      var state_tax = Ufs.find({uf: uf_to});
      var aliquot_percentage = state_tax.get('aliquot_tax')
      var national_percentage = state_tax.get('national_tax')
      var imported_percentage = state_tax.get('imported_tax')

      gnre_national = (((aliquot_percentage-national_percentage)/100)*national_value)*(quota/100)
      gnre_imported = (((aliquot_percentage-imported_percentage)/100)*imported_value)*(quota/100)

      return Helper.roundDecimal(gnre_national,2) + Helper.roundDecimal(gnre_imported, 2);
    }
  }
})
