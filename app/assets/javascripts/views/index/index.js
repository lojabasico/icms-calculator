modulejs.define('index_index', [
  'jquery',
  'gnre',
  'index_helper'
], function($, Gnre, IndexHelper) {

  $(".calculate").on('click', function() {

    var gnre = Gnre.calculate(
      $(".quota").val(),
      $(".total").val(),
      $(".total-discount").val(),
      $(".imported-value").val(),
      $(".national-value").val(),
      $(".uf-to").val(),
      $(".uf-from").val()
    )

    var fecp = 0;
    $(".fecp .value").html("0,00");
    if($(".uf-to").val() == 'RJ') {
      var fecp = Gnre.calculate_fecp($(".total").val())
      $(".fecp .value").html(IndexHelper.roundDecimal(fecp,2));
    }

    $(".gnre-value").html(gnre-fecp);
    $(".total .value").html(gnre);
  })

})
modulejs.require('index_index');
