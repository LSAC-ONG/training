#Training Websockets

**Used Libraries**:
* Socket.IO - this contains the backend library 
* Socket.IO-client - this contains the frontend library


## 1. Ce sunt Websockets?
Websockets este un protocol de comunicare care realizeaza o conexiune full-duplex intre client si WebServer.
Acesta depinde de stiva TCP/IP, la fel ca si cel de HTTP, iar nivelul de securitate este similar, insa ofera
comunicare mai rapida fata de HTTP.
## 2.Ce este Socket.IO?
Socket.IO este o librarie care are la baza ei Websockets. Desi Socket.IO
foloseste protocolul de comunicare Websockets, asta nu inseamna ca este compatibil cu el.
Un website care implementeaza protocolul de comunicare Websockets nu va putea comunica cu un WebServer
care foloseste Soxket.IO, deoarece pentru a functiona cum trebuie libraria Socket.IO adauga niste headere
in mesajele pe care le trimite clientilor pentru a putea functiona cum trebuie.
## 3. Cum implementez Socket.IO pe backend?
Pentru a putea folosi libraria de Socket.IO pe WebServer este necesar sa o intalam mai intai cu `npm install socket.io`
urmand ca mai departe sa configuram un WebServer pe care sa il poata folosi libraria:
```javascript
    const app = require('express')()
    const http = require('http');
    const WebServer = http.createServer(app);
    const io = require('socket.io')(WebServer)
    const port = 5000;
    app.get("",(...) =>{...})

    io.on("connection", (socket) =>{
        console.log("User has connected to the WebServer")
    })
    WebServer.listen(port)
```
## 4. Cum implementez Socket.IO pe frontend?
Daca totul merge cum trebuie backend-ul ar trebui sa ofere un fisier pentru client care poate fi 
preluat direct din HTML folosind 
```html
    <script src="/socket.io/socket.io.js"></script>
```
Acest fisier da acces clientului la variabila `io` pe care o poate folosi cand se conecteaza la WebServer:
```javascript
const socket = io("namespace_to_connect")
socket.on("event", (msg)=>{
    ...
})
socket.emit("event", (msg)=>{
    ...
})
```
Pentru a se putea conecta la WebServer este necesar sa fie furnizat un namespace acceptat de WebServer.
Defaultul este cunoscut ca si root sau "/" sau example.com/ 

## 5. Cum adaptez totul pentru a putea folosi in REACT socket.io?
Pentru React:
 1. Trebuie salvata libraria de client cu `npm install socket.io-client` 
si importata intr-un fisier nou cu `import io from "socket.io-client"`
 2. Cream o functie care va contine toata logica de socket.io:
```javascript
const socket = (userID)=>{
    const socketRef = useRef();

    useEffect(() => {
        
        const[messages, setMessages] = useState([])
        socketRef.current = io("")
        socketRef.current.on("event", (msg) => {
            setMessages((messages) =>[...messages, msg])
        });
        socketRef.current.on("event", (...) =>{
            ...
        });
        ...
        return () => {
            socketRef.current.disconnect();
        };
    }, [userID]);
    const sendMessage = (...) => {
        socketRef.current.emit("event", {
            ...
        });
    };
    const send...
    return { sendMessage, ...};
}
```
3. Se vor exporta toate metodele care au ca scop trimiterea de mesaje si pot fi apelate de oriunde sunt importate
, ex>: sendMEssage, iar a putea primi mesaje de la WebServer care sa poata fi prelucrate, este necesar ca acestea sa fie salvate 
in niste variabile de stare declarate initial cu `useState()`.

## 6. Cum folosesc Socket.IO pe WebServer sau front-end?
Variabile, metode si termeni si unde pot fi folosite:
* **namespace** - Un concept ce ajuta la spargerea logicii in cadrul WebServerului
* **room** - O grupare de clienti ce pot primi impreuna mesaje
* **io** 
  * reprezinta conexiunea cu WebServerul (Client)
  * reprezinta un namespace (Server), in general namespace-ul global
* **socket** = conexiunea dintre un client si WebServer 
* `const nsp = io.of("nume_namespace")` Creeaza un namespace numit "nume_namespace" si il salveaza intr-o variabila nsp
* `io.of(/^\/dynamic-\d+$/)` = namespace dinamic (orice namespace primit de la clent se poate conecta la acesta)
* `nsp.emit("event_name", msg)` - Trimite catre toti clientii conectati la namespace-ul nsp
* `socket.emit("event_name", msg)` - Trimite catre tot clientul caruia ii apartine socket un mesaj numit "event_name"
* `socket.broadcast.emit("event_name", msg)` - trimite catre toti clientii din namespace mai putin 
celui de care apartine **socket**  mesajul
* `socket.on("event_name", (msg) =>{...})` - atunci cand clientul sau WebServerul trimit cu _emit_ un eveniment numit "event_name" 
celalat il va putea primi astfel putand realiza ceva cu acel mesaj primit
* `socket.join("room_name")` - adauga socket-ul intr-o camera
* `io.to("room_name").emit("event_name", msg)` - trimite toti clientilor dintr-o camera un eveniment, dar evita ceilalti clienti 
(OBS.: .to poate fi apelat de mai multe ori, trimitand astfel mesajul la toti clientii care apartin uneia sau mai 
multor camere o singura data. Ex.: `io.to("room_name1").to("room_name2").to("room_name3").(...).emit("event_name", msg)`)
* `socket.to('some room').emit('some event')` ca mai sus insa nu trimite si clientului de care apartine **socket**
* `io.except("room1").emit(...);` trimite un eveniment tuturor userilor ce nu apartin lui "room1" (OBS: Poate fi apelat de mai multe ori ca si **io.to**() si chiar impreuna cu el)
* `nsp.use((socket, next)=>{ ... })` permite folosirea unui middleware la pentru validarea conexiunilor dintre client si WebServer
* `const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);` - wrapper ce permite folosirea unui middleware de express in socket.io
* `socket.handshake` - obiect ce contine mai multe detalii:
```json
    {
        headers: /* the headers sent as part of the handshake */,
        time: /* the date of creation (as string) */,
        address: /* the ip of the client */,
        xdomain: /* whether the connection is cross-domain */,
        secure: /* whether the connection is secure */,
        issued: /* the date of creation (as unix timestamp) */,
        url: /* the request URL string */,
        query: /* the query params of the first request */,
        auth: /* the authentication payload */
    }
```

| Variabila/metoda/termen | Disp Client | Disp. Server|
| ----------- | ----------- | -----------|
|namespace|![xMark][mark_x]|![check_mark][mark_check]|
|room|![check_mark][mark_check]|![check_mark][mark_check]|
|io|![check_mark][mark_check]|![check_mark][mark_check]|
|socket |![check_mark][mark_check]|![check_mark][mark_check]|
|const nsp = io.of("nume_namespace")`|![xMark][mark_x]|![check_mark][mark_check]|
|io.of(/^\/dynamic-\d+$/)|![xMark][mark_x]|![check_mark][mark_check]|
|nsp.emit("event_name", msg)|![xMark][mark_x]|![check_mark][mark_check]|
|socket.emit("event_name", msg)|![check_mark][mark_check]|![check_mark][mark_check]|
|socket.broadcast.emit("event_name", msg)|![xMark][mark_x]|![check_mark][mark_check]|
|socket.on("event_name", (msg) =>{...})|![check_mark][mark_check]|![check_mark][mark_check]|
|socket.join("room_name")|![xMark][mark_x]|![check_mark][mark_check]|
|io.to("room_name").emit("event_name", msg)|![xMark][mark_x]|![check_mark][mark_check]|
|socket.to('some room').emit('some event')|![xMark][mark_x]|![check_mark][mark_check]|
|io.except("room1").emit(...);|![xMark][mark_x]|![check_mark][mark_check]|
|nsp.use((socket, next)=>{ ... })|![xMark][mark_x]|![check_mark][mark_check]|
|const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);|![xMark][mark_x]|![check_mark][mark_check]|
|socket.handshake|![xMark][mark_x]|![check_mark][mark_check]|

##7. Ce pot face daca doresc sa adaug mai multa securitate in aplicatia mea ce foloseste Scocket.IO?
In Socket.IO exista o variabila ce poate fi configurata de voi cum va doriti, variabila care va fi 
trimisa de catre client la initializarea conexiunii cu WebServerul, iar WebServerul va putea folosi acea
variabila pentru a putea valida conexiunea la WebServer-ul de socket.IO fie folosind un middleware (best choice)
sau si dupa conectare.
```javascript
//Client declaration
socket = io(SOCKET_SERVER_URL, {
  query: {
    roomId,
    name
  }
});

//Server declaration
    const query = socket.hanshake.query
```
##8. Este nevoie sa fac ceva special pentru a putea sa utilizez libraria cu vreun framework de front-end?
Pe unele framework-uri de front-end este posibil ca in cazul in care nu aveti configurate CORS Policies va 
fi nevoie sa faceti niste configurari la WebServer-ul se socket.io si client pe care le gasiti [aici][link_cors]

# Observatii!!!
1. Socket.IO este un framework de Websockets, iar cele 2 nu sunt compatibile intre ele
2. Pentru CORS Policies click [aici][link_cors]
3. Daca doresti sa separi codul de socket.io in mai multe fisiere gasesti un exemplu [aici][link_files]

[mark_x]:https://icongr.am/material/close-box.svg?size=19&color=ff0000
[mark_check]:https://icongr.am/fontawesome/check-square.svg?size=20&color=08d415
[link_cors]:https://socket.io/docs/v4/handling-cors/#Configuration
[link_files]:https://socket.io/docs/v4/server-application-structure/