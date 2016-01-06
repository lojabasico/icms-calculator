modulejs.define('taxes_instance', ['tax', 'taxes', 'underscore'], function(Tax, Taxes, U) {

  var map = [
    {uf: 'AC', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'AL', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'AM', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'AP', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'BA', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'CE', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'DF', national_tax: 7, imported_tax: 4, aliquot_tax: 12},
    {uf: 'ES', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'GO', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'MA', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'MT', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'MS', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'MG', national_tax: 12, imported_tax: 4, aliquot_tax: 18},
    {uf: 'PA', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'PB', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'PR', national_tax: 12, imported_tax: 4, aliquot_tax: 18},
    {uf: 'PE', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'PI', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'RN', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'RS', national_tax: 12, imported_tax: 4, aliquot_tax: 17},
    {uf: 'RJ', national_tax: 12, imported_tax: 4, aliquot_tax: 19},
    {uf: 'RO', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'RR', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'SC', national_tax: 12, imported_tax: 4, aliquot_tax: 17},
    {uf: 'SP', national_tax: 18, imported_tax: 18, aliquot_tax: 18},
    {uf: 'SE', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
    {uf: 'TO', national_tax: 7, imported_tax: 4, aliquot_tax: 17},
  ]

  var taxes_array = []
  U.each(map, function(v,k) {
    taxes_array.push(
      new Tax({
        uf: v['uf'],
        national_tax: v['national_tax'],
        imported_tax: v['imported_tax'],
        aliquot_tax: v['aliquot_tax']
      })
    )
  });

  return new Taxes(taxes_array);
})
