modulejs.define('index_index', [
  'jquery',
  'gnre'
], function($, Gnre) {

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

    $(".gnre-value").html(gnre);
  })

})
modulejs.require('index_index');
