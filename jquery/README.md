# Training jQuery

## Prerequisites

- None, doar fiti siguri ca sunteti up to date cu repo-ul de training ca sa aveti tot ce e nevoie.

## Subiecte abordate

- Ce e jQuery si de ce il folosim?
- DOM Manipulation
- Animatii
- AJAX requests (UX heaven)

## 1. Ce e jQuery si de ce il folosim?

[jQuery](https://jquery.com/) este pur si simplu o biblioteca de javascript cu multe helpere, doar trebuie inclus printr-un tag ```<script>```. Este una din cele mai clasice bilbioteci, venind cu multe alte flavoruri: jQuery UI, jQuery Mobile, etc. pentru diverse use case-uri. 

Unul din cele mai folositoare feature-uri si un motiv pentru care il foloseste multa lume sunt requesturile de tip **AJAX** care ofera incarcare lazy a resurselor (putem prelua resurse si dupa ce deja s-a incarcat pagina, ceva imposibil folosind clasicul request-response).

La aparitia lui, jQuery a revolutionat prin usurinta selectarii elementelor, renuntand la clasicele ```getElementById```, ```getElementsByClassName``` si introducand ceva nou: **query selector** (da, in cele din urma a devenit feature al limbajului JS, dar inspiratia a venit din jquery).

Query selectorul in jquery poate fi accesat prin caracterul ```$```, exemplu: ```$('li#item')``` va selecta elementul de tip ```<li>``` care are id-ul ```item```. Mai multe exemple si detalii [aici](https://api.jquery.com/jquery/).

## 2. DOM Manipulation

In principiu, se aplica aceleasi principii ca in javascriptul simplu, doar ca selectarea elementelor se face cu ```$```. Aici conteaza mult sa cautati in documentatie sa gasiti exact ce aveti nevoie, are o tona de functii.

```js
/* Vizibilitate */
$('#element').hide() // ascunde elementul
$('#element').show()  // afiseaza elementul
$('#element').toggle() // hide/show alternativ

/* CSS */
$('#element').css('background-color', 'red');

/* Schimbare content */
$('#element').html('New inner html'); // echivalent innerHTML din JS
$('#element').append('<p> New paragraph </p>');
$('#element').empty(); // innerHTML setat la nimic

/* Setare dinamica de atribute (href, src, etc) */
$('a#link').attr('href', 'https://google.com'); 

/* Wrapping */
$('#element').wrap('<h1>'); // <h1> <li id="element></li> </h1>
```

## 3. Animatii

jQuery contine foarte multe metode sa faceti animatii si efecte in pagina. Aveti o lista cu toate [aici](https://api.jquery.com/category/effects/). Majoritatea sunt straight forward, mai putin ```animate```.

```animate``` va face o tranzitie in functie de proprietatile CSS pe care le dati ca parametru. Acestea pot tine de culoare, dimensiuni, pozitie, text, si altele. 

```js
$('#box').animate({ "left": "+=50px" }, "slow" );
```

Sectiunea de cod de mai sus va muta elementul cu id-ul ```box``` 50 de pixeli mai la dreapta, iar viteza animatiei este setata pe incet. Mai multe despre animate [aici](https://api.jquery.com/animate/) si [aici](https://www.w3schools.com/jquery/eff_animate.asp.).

## AJAX Requests

Requesturile de tip **AJAX (Asynchronous Javascript and XML)** sunt una din cele mai folositoare lucruri in web development. Acestea ne asigura ca putem comunica cu serverul dupa incarcarea paginii, asigurand un UX mai bun (nu mai e nevoie de refresh) si uneori, eficienta, pentru ca nu mai trebuie reincarcate toate elementele, doar ce ne intereseaza (lazy loading).

Exemple unde AJAX ar putea fi folositor:
- **Paginare eficienta**. Daca avem, de exemplu, un magazin online cu peste 100.000 de produse, e inacceptabil sa le tragem pe toate la fiecare request, deoarece userul probabil nici nu va trece de primele 100. Putem face acest lucru elegant folosind AJAX prin a afisa doar primele 50 de produse, de exemplu, iar la fiecare pagina noua sa mai tragem inca 50 prin AJAX, userul nici nu va observa diferenta.
- **Date dinamice**. Sa zicem ca in mai multe locuri pe site utilizatorii trebuie sa isi selecteze tara de unde provin. Cum facem codul cat mai scalabil? Daca, de exemplu, trebuie sa stergem o tara, sau sa adaugam una noua? Daca am hardcoda listele de tari, ar trebui, teoretic, sa schimbam in toate locurile si ar putea crea inconsistente. O varianta mai buna ar fi sa legam acel input de un tabel din baza de date: ```countries```, iar acesta sa se populeze dinamic prin AJAX. Astfel, facem mult mai simple modificarile si reducem erorile.  

Din fericire, jQuery are o [sintaxa frumoasa si usoara de inteles](https://api.jquery.com/jquery.ajax/) pentru AJAX, facandu-ne viata mai buna.

```js
$.ajax({
    method: 'GET',
    url: 'https://google.com',
}).done(function(data) {
    console.log(`Successful request. Fetched data ${data}`);
}).fail(function(jqXHR, textStatus) {
    alert(`Request failed: ${textStatus}`);
});
```

Putem observa cateva elemente clare ale unui request AJAX:
- Se apeleaza prin ```$.ajax```
- Trebuie sa ii dam un tip de metoda pentru request, cel mai des va fi ```POST``` sau ```GET```.
- Trebuie sa ii dam un url unde sa faca request-ul, de obicei va fi un API endpoint pentru anumite resurse, dar in principiu poate fi orice (pagini web, de exemplu);
- ```.done``` -> callback-ul dat ca parametru va fi executat la un request reusit, avand acces la date prin parametrul ```data```.
- ```.fail``` -> callback executat la un request esuat, fie din cauza serverului, fie din alte motive (conexiune proasta, etc).
- O multime de parametri care pot fi setati, pe care ii puteti gasi [aici](https://api.jquery.com/jquery.ajax/), in functie de nevoi. (contentType custom, headere custom pe request, caching, etc).

**GOOD PRACTICE:** Mereu includeti si un ```.fail``` in care sa notificati utilizatorul ca undeva ceva nu a mers ok si sa incerce din nou.