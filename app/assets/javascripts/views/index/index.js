modulejs.define('index_index', [
  'jquery',
  'tax',
  'taxes',
  'taxes_instance',
  'index_helper'
], function($, Tax, Taxes, Ufs, Helper) {

  $(".calculate").on('click', function() {

    var quota = $(".quota").val();

    var total = $(".total").val().replace(",",".");
    var total_discount = $(".total-discount").val().replace(",",".");
    var imported_value = $(".imported-value").val().replace(",",".");
    var national_value = $(".national-value").val().replace(",",".");
    var uf_to = $(".uf-to").val();
    var uf_from = $(".uf-from").val();

    var quote_national = 0;
    var quote_imported = 0;

    if(total_discount > 0) {
      quote_national = national_value*total_discount/total;
      quote_imported = imported_value*total_discount/total;
    } else {
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

    var gnre = Helper.roundDecimal(gnre_national,2) + Helper.roundDecimal(gnre_imported, 2);

    $(".gnre-value").html(gnre);
  })

})
modulejs.require('index_index');
