# PHP Training

## Prerequisites:

- Apache2
- PHP
- MySQL
- LAMP/XAMPP Stack tutorial: [Ubuntu](https://phoenixnap.com/kb/how-to-install-lamp-stack-on-ubuntu), [Windows](https://www.apachefriends.org/download.html)

## Ce vom invata in acest training?

Acesta va fi un training mai hands-on fata de celalalte. Va rugam sa fiti atenti in timpul lui si eventual sa va uitati la inregistrari. PHP e un limbaj mai complex fata de cele pe care le-am facut pana acum si ar lua mult timp sa explicam fiecare chestie intr-un README. Consideram ca cel mai bine veti invata lucrand si aplicand in practica ce ati vazut pana acum la traininguri.

Vom trece prin cea mai clasica aplicatie de PHP: login/register. Veti intelege cum functioneaza un server, ce e un request si un response, cum putem persista date intre pagini, si multe alte challenge-uri pe care le veti intalni in viata de zi cu zi ca programator. Multe lucruri prezentate aici nu sunt specifice doar PHP, acesta fiind unul din multele limbaje care pot rezolva astfel de probleme.

Query pentru tabelul de useri:
```sql
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## After training

- Am adaugat codul pentru cat am putut parcurge. Ca tema, ar ramane urmatoarele:
    - Login: adaugare in modelul de user a unei functii de extragere a unui utilizator, logica in logincontroller cu validare, popularea sesiunii si redirect la home.php. daca userul deja e logat si incearca sa intre pe login.php, ar trebui sa i se dea redirect la home.php.
    - Register: verificare ca userul deja exista in DB si afisarea unui mesaj de eroare corespunzator in acest caz