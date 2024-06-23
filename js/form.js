function saveFormData(event) {
    event.preventDefault();
    var timestamp = new Date().getTime();
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var people = document.getElementById("people").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;
    var formData = {
        name: name,
        surname: surname,
        people: people,
        date: date,
        message: message
    };
    localStorage.setItem("formData_" + timestamp, JSON.stringify(formData));
    alert("Formularz został zapisany!");
    document.getElementById("myform").reset();
    showFormList();
}

function showFormList() {
    var formList = document.getElementById("formList");
    formList.innerHTML = '';
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith("formData_")) {
            var formData = JSON.parse(localStorage.getItem(key));
            var listItem = document.createElement("li");
            listItem.innerHTML = 
                "Imię: " + formData.name + 
                ", Nazwisko: " + formData.surname + 
                ", Liczba osób: " + formData.people + 
                ", Data: " + formData.date + 
                ", Informacje: " + formData.message + 
                " <button onclick='editForm(\"" + key + "\")'>Edytuj</button>" +
                " <button onclick='deleteForm(\"" + key + "\")'>Usuń</button>";
            formList.appendChild(listItem);
        }
    }
}

function editForm(key) {
    var formData = JSON.parse(localStorage.getItem(key));
    document.getElementById("name").value = formData.name;
    document.getElementById("surname").value = formData.surname;
    document.getElementById("people").value = formData.people;
    document.getElementById("date").value = formData.date;
    document.getElementById("message").value = formData.message;
    deleteForm(key); // usuwa istniejący wpis, aby można było go nadpisać nowym
}

function deleteForm(key) {
    localStorage.removeItem(key);
    showFormList();
}

function toggleFormList() {
    var reservationList = document.getElementById("reservationList");
    if (reservationList.style.display === "none") {
        reservationList.style.display = "block";
        showFormList();
    } else {
        reservationList.style.display = "none";
    }
}

window.onload = function() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hour = ('0' + now.getHours()).slice(-2);
    var minute = ('0' + now.getMinutes()).slice(-2);
    var formattedDate = year + "-" + month + "-" + day + "T" + hour + ":" + minute;
    document.getElementById("date").setAttribute("value", formattedDate);
}
