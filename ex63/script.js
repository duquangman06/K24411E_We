window.onload = function () {

    loadDate();

};

function loadDate() {

    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    for (let i = 1; i <= 31; i++) {
        day.innerHTML += `<option>${i}</option>`;
    }

    for (let i = 1; i <= 12; i++) {
        month.innerHTML += `<option>${i}</option>`;
    }

    for (let i = 1970; i <= 2025; i++) {
        year.innerHTML += `<option>${i}</option>`;
    }
}

function registerMember() {

    let name =
        document.getElementById("txtName").value.trim();

    let email =
        document.getElementById("txtEmail").value.trim();

    if (name === "") {
        alert("Name cannot be blank!");
        document.getElementById("txtName").focus();
        return;
    }

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Email is invalid!");
        document.getElementById("txtEmail").focus();
        return;
    }

    let gender =
        document.querySelector(
            'input[name="gender"]:checked'
        ).value;

    let birthday =
        document.getElementById("day").value +
        "/" +
        document.getElementById("month").value +
        "/" +
        document.getElementById("year").value;

    let hobbies = [];

    let checkboxList =
        document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

    checkboxList.forEach(function (item) {
        hobbies.push(item.value);
    });

    let hobbyText = hobbies.join(", ");

    let color =
        document.querySelector(
            'input[name="color"]:checked'
        ).value;

    let table =
        document.getElementById("tblMember");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = birthday;
    row.insertCell(4).innerHTML = hobbyText;
    row.insertCell(5).innerHTML = color;

    row.onmouseover = function () {
        this.style.backgroundColor = "yellow";
    }

    row.onmouseout = function () {
        this.style.backgroundColor = "white";
    }
}

function nextData() {

    document.getElementById("txtName").value = "";
    document.getElementById("txtEmail").value = "";

    document
        .querySelectorAll('input[type="checkbox"]')
        .forEach(function (item) {
            item.checked = false;
        });

    document.getElementById("txtName").focus();
}