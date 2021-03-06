var products = [{
  id: '1',
  name: 'Sp1',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 100000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
},
{
  id: '2',
  name: 'Sp2',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 200000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
},
{
  id: '3',
  name: 'Sp3',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 300000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
},
{
  id: '4',
  name: 'Sp4',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 400000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
},
{
  id: '5',
  name: 'Sp5',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 500000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
},
{
  id: '6',
  name: 'Sp6',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 600000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
},
{
  id: '7',
  name: 'Sp7',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 700000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
},
{
  id: '8',
  name: 'Sp8',
  quantily: '<input class="form-control input-sm" type="text" value="1"><a href="#"><i class="fa fa-caret-up"></i></a><a href="#"><i class="fa fa-caret-down"></i></a>',
  price: 800000,
  subtotal: 2,
  btndel: '<button type="">X</button>'
}
];

function displayTable(products) { // get the table to add rows to
  var table = document.getElementById('tablecart');

  // cycle through the array for each of the presidents
  for (var i = 0; i < products.length; ++i) { // keep a reference to an individual president object
    var product = products[i];

    // create a row element to append cells to
    var row = document.createElement('tr');

    // properties of the array elements
    var properties = ['id', 'name', 'quantily', 'price', 'subtotal', 'btndel'];

    // append each one of them to the row in question, in order
    for (var j = 0; j < properties.length; ++j) { // create new data cell for names
      var cell = document.createElement('td');
      // set name of property using bracket notation (properties[i] is a string,
      // which can be used to access properties of president)
      cell.innerHTML = product[properties[j]];
      // add to end of the row
      row.appendChild(cell);
    }
    // add new row to table
    table.appendChild(row);
  }
}

displayTable(products);
