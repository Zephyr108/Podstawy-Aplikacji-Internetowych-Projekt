//utworzenie obiektu xhr:
const xhr = new XMLHttpRequest();
function pobierzDane(act)// Funkcja pobierająca dane na podstawie akcji (act):
{ if (xhr) {// Sprawdzenie, czy obiekt XMLHttpRequest został utworzony:
 var url = "http://localhost/projekt/dane/" + act+ ".txt";// Ustalenie adresu URL na podstawie akcji (act):
 xhr.open("GET", url);// Otwarcie połączenia z serwerem:
 xhr.addEventListener("readystatechange", function () {// Dodanie nasłuchiwania 
 if (xhr.readyState === 4) {// Obsługa, gdy stan jest równy 4 (zakończono żądanie):
 document.getElementById("s1").innerHTML = xhr.responseText;// Umieszczenie odpowiedzi serwera w elemencie o id "s1":
 }
 });
 xhr.send(null);
 }
}

//Skrypt z Fetch API
//sprawdź czy DOM został załadowany:
document.addEventListener("DOMContentLoaded", function() {

 //obsługa zdarzenia kliknięcia na b1:
 var button1 = document.getElementById("b1");
 button1.addEventListener('click', function(){
 fetch("http://localhost/projekt/dane//historia.txt")
 .then( response => {return response.text();} )// Pobranie odpowiedzi w formie tekstu z pliku
 .then( dane => { document.getElementById("s1").innerHTML = dane; })
 },// Umieszczenie pobranych danych w elemencie o id "s1":
 false);

 
 var button2 = document.getElementById("b2");// Obsługa zdarzenia kliknięcia na przycisku b2:
 button2.addEventListener('click', function(){
 fetch("http://localhost/projekt/dane//opis.txt")
 .then( response => {return response.text();} )// Pobranie odpowiedzi w formie tekstu z pliku

 .then( dane => { document.getElementById("s1").innerHTML = dane; })// Umieszczenie pobranych danych w elemencie o id "s1":
 },
 false);

})