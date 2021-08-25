# MaterializeCSS
[Link documentație](https://materializecss.com)
## Prerequisites
MaterializeCSS nu necesită instalare, ci conține două fișiere, unul de CSS și unul de Java pe care trebuie să le importați. Opțional, se poate adăuga și fontul Roboto, recomandat de guideline-urile Material Design.


### Setup
1. Proiectul va avea următoarea structură de bază:
```
MyWebsite/
  |--css/
  |  |--materialize.css
  |
  |--fonts/
  |  |--roboto/
  |
  |--js/
  |  |--materialize.js
  |
  |--index.html
```

2. Descărcați de pe site-ul MaterializeCSS fișierele necesare. Link: https://github.com/Dogfalo/materialize/releases/download/1.0.0/materialize-v1.0.0.zip
3. În fișierul index.html încărcăm resursele necesare: materialize.min.css, materialize.min.js, precum și font-ul pentru Material Icons.
```html
 <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>

      <!--Java at end of body for optimized loading-->
      < type="text/java" src="js/materialize.min.js"></>
    </body>
  </html>
```
>Observați lipsa jQuery. Începând cu versiunea 1.0.0, MaterializeCSS nu mai necesită utilizarea obligatorie a jQuery.

## Ce este MaterializeCSS?
MaterializeCSS este un framework CSS gratuit și open-source pentru dezvoltarea front-end. Se bazează pe setul de specificații Material Design, dezvoltat de către Google, oferind o dezvoltare rapidă a aplicațiilor, cu un design profesional și ușor de implementat.

## De ce ai folosi MaterializeCSS?
Poți dezvolta site-uri și aplicații complexe, cu un design plăcut și ușor de urmărit.

### Caracteristici:
- **Consistență** (design uniform)
- **Sistem responsive**
  - website-urile funcționează și arată cum trebuie indiferent de tipul device-ului (tabletă, laptop, desktop, telefon)
  - relativ la lățimea ecranului, nu la înălțime (folosește [CSS media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) bazate pe lățime)
  - MaterializeCSS e "**mobile-first**" ceea ce înseamnă că mai întâi va considera design-ul device-urilor cu un ecran mai mic
- **Compatibilitate**
  - se bazează pe standarde acceptate și folosite de majoritatea site-urilor

## Program training
1. Introducere MaterializeCSS + utilitate 
2. Explicații MaterializeCSS Grid
3. Componente MaterializeCSS (content, componente, grid, helpers, etc.)

