var currentPage = 1;
var pageSize = 50;

function load_products(products, productbody) {
    productbody.innerHTML = "";
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productID = product.id;
        var productName = product.name;

        var tr = document.createElement("tr");
        var td_id = document.createElement("td");
        var td_name = document.createElement("td");
        var td_image = document.createElement("td");

        var img = document.createElement("img");
        img.setAttribute("src", "images/delete_3625005.png");
        img.setAttribute("onclick", "delete_product(this)");

        td_id.innerHTML = productID;
        td_name.innerHTML = productName;
        td_image.appendChild(img);

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_image);
        productbody.appendChild(tr);
    }
}

function renderPage(page) {
    var totalPages = Math.ceil(products.length / pageSize);
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    var start = (currentPage - 1) * pageSize;
    var end = start + pageSize;
    var pageProducts = products.slice(start, end);

    var productbody = document.getElementById("product_table_body");
    load_products(pageProducts, productbody);
    updatePaginationInfo();
}

function updatePaginationInfo() {
    var totalPages = Math.ceil(products.length / pageSize);
    document.getElementById("pageInfo").textContent = "Trang " + currentPage + " / " + totalPages;
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

function prevPage() {
    if (currentPage > 1) {
        renderPage(currentPage - 1);
    }
}

function nextPage() {
    var totalPages = Math.ceil(products.length / pageSize);
    if (currentPage < totalPages) {
        renderPage(currentPage + 1);
    }
}

function initPagination() {
    renderPage(1);
}

function delete_product(img_element) {
    if (confirm("Are you sure to delete this product?")) {
        img_element.parentElement.parentElement.remove();
    }
}