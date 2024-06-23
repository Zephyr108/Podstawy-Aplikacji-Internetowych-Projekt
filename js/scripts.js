/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Podświetla date na stronie kontaktowej
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})



var map; // Zmienna przechowująca obiekt mapy
var routingControl; // Zmienna przechowująca kontrolę trasy

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var output = document.getElementById("geo");
    output.innerHTML = "<p>Szerokość geograficzna: " + latitude +
        "</p><p>Wysokość geograficzna: " + longitude + "</p>";
    pokazMape(latitude, longitude);
}

function errorHandler(error) {
    var output = document.getElementById("geo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "Użytkownik nie udostępnił danych.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Dane lokalizacyjne niedostępne.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "Przekroczono czas żądania.";
            break;
        default:
            output.innerHTML = "Nieznany błąd";
    }
}

function getLocation() {
    if (navigator.geolocation) {
        var options = {timeout: 60000};
        navigator.geolocation.getCurrentPosition(
            showLocation,
            errorHandler,
            options);
    } else {
        alert("Twoja przeglądarka nie wspiera geolokalizacji!");
    }
}

function showRoute() {
    getLocation();
}

function pokazMape(x, y) {
    map = L.map('mapka').setView([x, y], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    routingControl = L.Routing.control({
        waypoints: [
            L.latLng(x, y), // Współrzędne użytkownika
            L.latLng(51.2369751, 22.5496549) // Współrzędne pizzerii
        ],
        routeWhileDragging: true,
        language: 'pl', 
        dragging: false 
    }).addTo(map);
}





