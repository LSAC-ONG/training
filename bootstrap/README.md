# Bootstrap

## Prerequisites
Bootstrap nu necesită instalare. Practic, Bootstrap este o colecție de fișiere CSS și JavaScript pe care trebuie să le includeți în proiect.

### Setup
1. Adăugați HTML5 doctype tag
```
<!DOCTYPE html>
```
2.1. **Folosind BoostrapCDN**

Pentru a include biblioteca Bootstrap CSS adăugați următorul link:
```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
```
Există și o bibliotecă opțională orientată pe partea de JavaScript ce necesită jQuery și Popper.js. Pentru a le include, adăugați următoarele linii:
```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
```
2.2 **Fără BootstrapCDN**

Descărcați fișierele sursă de pe [Download Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/#compiled-css-and-js), secțiunea Compiled CSS and JS. Dezarhivați fișierul .zip pe care l-ați descărcat și o să aveți 2 foldere (css & js). Puteți să le adăugați într-un alt folder bootstrap și să includeți în fișier următoarele linii:
```
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<script src='bootstrap/js/bootstrap.min.js'></script>
```
jQuery și Popper.js nu sunt incluse în arhivă și trebuie adăugate separat ca mai sus.

3. Adăugați tag-ul meta pentru a asigura **proper rendering** și **touch zooming**:
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Ce este Bootstrap?
Bootstrap este un framework CSS gratuit și open-source pentru dezvoltarea front-end. 

## De ce ai folosi Bootstrap?
Pentru că poți dezvolta website-uri mult mai ușor și repede.

### Caracteristici:
- **Consistență** (design uniform)
- **Sistem responsive**
  - website-urile funcționează și arată cum trebuie indiferent de tipul device-ului (tabletă, laptop, desktop, telefon)
  - relativ la lățimea ecranului, nu la înălțime (folosește [CSS media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) bazate pe lățime)
  - Bootstrap e "**mobile-first**" ceea ce înseamnă că mai întâi va considera design-ul device-urilor cu un ecran mai mic
- **Compatibilitate**
  - se bazează pe standarde acceptate și folosite de majoritatea site-urilor
  
## Program training
1. Introducere Bootstrap + utilitate 
2. Explicații Bootstrap Grid (scurt rezumat mai jos)
3. Exemple Bootstrap (content, componente, grid, etc.)

## Bootstrap Grid = linii + coloane + containere

![Bootstrap Grid](https://miro.medium.com/max/2342/1*6frm0pq5VjPcc71EqH7cKw.png)

### [The Rules of the Grid](https://medium.com/wdstack/how-to-bootstrap-94abe3525442)
> 1. Columns must be the immediate child of a Row.
> 2. Rows are only used to contain Columns, nothing else.
> 3. Rows should be placed inside a Container.

### Linie
- **grupare de coloane**
- conținutul nu trebuie inclus direct în linie, ci mai întâi în coloane
- by default are display: flex adică toate coloanele incluse în această linie au aceeași înălțime

### Coloane
- trebuie să fie copiii linii
- pot avea **lățimi diferite**
- așezate de la stânga la dreapta (sau de sus în jos)
- au **aceeași înălțime** cu celelalte coloane de pe aceeași linie
- pot conține alte linii sau coloane (numite **linii/coloane imbricate**)
- grid-ul clasic Bootstrap are **12 coloane unități**
- în Bootstrap 4, există opțiunea de "auto-layout" column
- pot fi folosite mai puțin (sau mai mult) de 12 coloane
- dacă există mai mult de 12 coloane cele rămase vor fi așezate vertical mai jos (**column wrapping**)
- lățimea coloanei și "wrapping"-ul sunt controlate folosind **Responsive Grid Tiers (Grid Breakpoints)**
  - **(xs)** - lățimea ecranului < 576px - default tier (col-xs-6 <=> col-6)
  - **sm** - lățimea ecranului >= 576px
  - **md** - lățimea ecranului >= 768px
  - **lg** - lățimea ecranului >= 992px
  - **xl** - lățimea ecranului >= 1200px

### Container
- **root** pentru Bootstrap Grid
- poate să conțină orice fel de elemente (nu neapărat linii și coloane pentru Grid), dar dacă sunt folosite linii & coloane atunci ele trebuie neapărat incluse într-un container
- conținutul este aliniat automat justify
- 2 tipuri de containere
  1. Fixed-width ("container")
  2. Full-width ("container-fluid")
- orice container poate conține mai multe linii
- o pagină poate să conțină mai multe containere

## Resurse
Am adăugat și un folder de resurse ce conține
- codul dezvoltat în cadrul trainingului de HTML + CSS adaptat pentru a include componente și alte opțiuni specifice Bootstrap
- container cu mai multe linii și coloane de dimensiuni diferite drept exemplu pentru Bootstrap Grid

## Resurse extra
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [w3schools.com](https://www.w3schools.com/bootstrap/bootstrap_ver.asp)
- [Articol Medium super detaliat și util](https://medium.com/wdstack/how-to-bootstrap-94abe3525442)
- [Bootstrap 4 exemple](https://www.codeply.com/bootstrap-4-examples)
- [Bootstrap 4 cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/)
- ***Google*** 
