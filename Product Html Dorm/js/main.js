function load_product_data(dataset)
{
  var tbody = document.getElementById('product_table_body');
  tbody.innerHTML = '';
  for(var i = 0; i < dataset.length; i++) {
    var product = dataset[i];
    var row = document.createElement('tr');
    row.addEventListener('click', function(event) {
      if (!event.defaultPrevented) {
        var cells = this.querySelectorAll('td');
        selectProduct(cells[0].textContent, cells[1].textContent, cells[2].textContent);
      }
    });

    row.innerHTML = '<td>' + product.id + '</td>' +
                    '<td>' + product.name + '</td>' +
                    '<td>' + product.price + '</td>' +
                    '<td><img src="images/ic_remove.png" alt="Delete" style="cursor:pointer; width:24px; height:24px;"></td>';

    var deleteIcon = row.querySelector('img');
    deleteIcon.addEventListener('click', function(event) {
      deleteRow(event);
    });

    tbody.appendChild(row);
  }
}

function selectProduct(id, name, price)
{
  document.getElementById('product_id').value = id;
  document.getElementById('product_name').value = name;
  document.getElementById('product_price').value = price;
}

function deleteRow(event)
{
  event.stopPropagation();
  if(confirm('Are you sure you want to delete this row?')) {
    var row = event.target.closest('tr');
    if(row) {
      row.remove();
    }
  }
}