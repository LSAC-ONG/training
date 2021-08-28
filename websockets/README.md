#Training Websockets

**Used Libraries**:
* Socket.IO - this contains the backend library 
* Socket.IO-client - this contains the frontend library


##1. Ce sunt Websockets?
Websockets este un protocol de comunicare care realizeaza o conexiune full-duplex intre client si server.
Acesta depinde de stiva TCP/IP, la fel ca si cel de HTTP, iar nivelul de securitate este similar, insa ofera
comunicare mai rapida fata de HTTP.
##2.Ce este Socket.IO?
Socket.IO este o librarie care are la baza ei Websockets. Desi Socket.IO
foloseste protocolul de comunicare Websockets, asta nu inseamna ca este compatibil cu el.
Un website care implementeaza protocolul de comunicare Websockets nu va putea comunica cu un server
care foloseste Soxket.IO, deoarece pentru a functiona cum trebuie libraria Socket.IO adauga niste headere
in mesajele pe care le trimite clientilor pentru a putea functiona cum trebuie.
##3. Cum implementez Socket.IO pe backend?
Pentru a putea folosi libraria de Socket.IO pe server este necesar sa o intalam mai intai cu `npm install socket.io`
urmand ca mai departe sa configuram un server pe care sa il poata folosi libraria:
```javascript
    const http = require('http');
    const server = http.createServer();
    const io = require('socket.io')(server)
```
##4. Ce ma fac daca am **_deja_** o aplicatie in express creata?
##5. Cum implementez Socket.IO pe frontend?
##6. Cum adptez totul pentru a-l include in REACT?
##7. Cum folosesc Socket.IO pe server sau front-end?
##8. Este nevoie sa fac ceva special pentru a putea sa utilizez libraria cu vreun framework de front-end?
#9. De retinut!!!
1. Socket.IO este un framework de Websockets, iar cele 2 nu sunt compatibile intre ele
2. 
