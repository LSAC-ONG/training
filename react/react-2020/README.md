# Training React


## Prerequisites
Pentru a folosi React trebuie să aveți [Node.js](https://nodejs.org/en/) și [npm](https://www.npmjs.com/) instalate.


### Setup
1. Windows
- [download Node.js](https://nodejs.org/en/download/)
- după instalare în command prompt:
    ```
    node -v
    npm -v
    ```
- ar trebui să afișeze o versiune node >= 8.10 și npm >= 5.6

2. Linux
  ```
  sudo apt install nodejs
  sudo apt install npm
  ```


## Ce este React?
**Library** ([library vs framework](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/#:~:text=The%20technical%20difference%20between%20a,in%20charge%20of%20the%20flow.)) for building **user interfeces**.


## Why React?
- **virtual DOM**
  - reprezentarea în memorie a UI-ului folosit
  - virtual DOM-ul este sincronizat cu DOM-ul real prin ReactDOM (reconciliation)
- update-uri reactive
  - când se modifică ceva React va compara reprezentarea internă cu ceea ce a primit și va actualiza numai acele componente care s-au modificat
  - din acest motiv, _timpul de încărcare este mult mai mic_
- **pretty fast learning curve**
  - React este o bibliotecă și este mai ușor de învățat decât un framework (ex: Angular)
- **React Native**
  - **același cod pentru mai multe platforme** (iOS, Android)
- **JSX**
  - extensie JavaScript care permite crearea declarativă a componentelor
  - separarea componentelor după logică și nu după limbajele de programare (HTML, CSS, JavaScript)
- dezvoltare pe bază de **componente**
  - simplificând, componentele sunt niște functii care pe baza unui input(props + state) returnează un output(JSX)
  - componentele pot fi **reutilizate** pentru a crea alte componente
- **unidirectional data binding**
  - fiecare componentă poate avea o stare
  - această stare poate fi trimisă mai departe copiilor, dar nu și invers
  - exemplu: toate butoanele unui formular pot să aibă aceeași culoare
      ```
      class Form extends Component {
        constructor(props) {
          super(props);
          this.state = {
              background: "bg-light"
          }
      }
      render() {
          return (
              <div>
                  <MyButton background={this.state} text="first button"/>
                  <MyButton background={this.state} text="second button"/>
              </div>
          );
      }
      ```


## Create React App
  ```
  npm install -g create-react-app
  npx create-react-app my-app
  ```


## Structura unui proiect
![Project structure](https://csharpcorner.azureedge.net/article/folder-structure-of-react-application/Images/Folder%20Structure%20of%20React.png)
    
- public/index.html = page template
- src/index.js = JavaScript entry point
- src = source code
- public = fișierele care pot fi utilizate de index.html
- package.json = orice proiect creat folosind npm conține acest fișier cu metadate


## JSX (JavaScript XML)
- combină HTML cu JavaScript
    ```
    const element = <p> JSX </p>;
    ```
- încorporarea expresiilor în JSX;
    ```
    const name = 'you';
    const element = <p> Hey, {name} </p>
    ```
- între {} se pot pune expresii JavaScript valide
- elementele pot să aibă copii sau nu
    ```
    const lonely = <div></div>;
    const notSoLonely = (
        <div>
            <h1> Hello </h1>
            <h2> Bye </h2>
        </div>
    );
    ```
- dacă tag-ul este empty atunci poate fi închis imediat: ```<div></div>``` echivalent cu ```<div />```
- pentru a fi folosit trebuie inclusă biblioteca React
  ```
  import React from 'react'
  ```


### Componente
- componentă = secvență de cod independentă ce poate fi reutilizată
- se împarte UI în componente mai mici care vor fi compuse pentru a crea componente din ce în ce mai complexe
- componentele definite trebuie să fie obligatoriu **capitalized** (React presupune că toate componentele care încep cu literă mică sunt componente built-in)
- functional & class components
  1. **Functional components** = funcție JavaScript care întoarce un element React (JSX)
       ```
       function BasicParagraph(props) {
           return <p> Hi there, {props.name} </h1>;
       }
       ```
  - componenta trebuie exportată pentru a putea fi folosită în alt fișier
      ```
      export default BasicParagraph;
      ```
  - componenta trebuie mai apoi importată în fișierul în care vrem să o folosim
      ```
      import BasicParagraph from './BasicParagraph'; // the file where the function was defined
      ```
  - poate avea props sau nu (vedem imediat ce sunt props)

  2. **Class components** = ES6 classes that return JSX
       ```
       class BasicParagraph extends React.Component {
           render() {
               return <p> Hi there, {props.name} </h1>;
           }
         }
       ```
  - import/export exact ca la functional components
  - funcția render este **obligatorie**
  - putem adăuga și stare sau **lifecycle methods** (vedem imediat ce mai sunt și astea)
- pentru a crea un element în React vom folosi funcția **React.createElement(component, props, ...children)**
  - exemplu: pentru a crea ```<div className="whatever" />``` putem folosi
      ```
      React.createElement(
          'div',
          {className: 'whatever'}
      )
      ```
- este la fel și pentru componentele definite de noi
  - exemplu: avem un button custom care va avea culoarea albastru și textul React
      ```
      React.createElement(
          'MyButton',
          {color: 'blue'},
          'React'
      )
      ```
- și mai simplu putem crea elementul direct fără a mai folosi React.createElement
    ```
    <MyButton color="blue">
        React
    </MyButton>
    ```
- notația de mai sus e un **syntactic sugar** pentru React.createElement și cele două apeluri sunt echivalente


### Props (properties)
- **one-way flow** (date trimise de la un părinte la copii)
- pot fi date sub forma de expresii valide JavaScript între {}
  - ex: ```<Number value={1 - 2}>```
- toate argumentele primite sunt transmise ca un singur obiect
  - ex:
      ```
      function MyButton(props) {
          return (
              <button className={props.background}>
                  {props.text}
              </button>
          );
      }
      function Wrapper() {
          return (
              <MyButton background="bg-dark" text="first button"/>
          );
        }
      ```
- toate componentele trebuie să fie **funcții pure** în raport cu proprietățile primite (funcții pure = nu schimbă datele de intrare și mereu întorc același rezultat pentru aceleași date de intrare)
- props sunt **read only** și nu pot fi modificate
- pentru a le modifica valoarea putem folosi starea


### State
- pentru functional components putem folosi [Hooks](https://reactjs.org/docs/hooks-intro.html)
- pentru clase vom adăuga un constructor în care inițializăm starea:
    ```
    constructor(props) {
        super(props);
        this.state = {
            // key: value pairs
        };
    }
    ```
- apelul constructorului de bază super(props) este **obligatoriu**
- state nu poate fi modificat direct ci numai folosind **setState**(state poate fi asignat direct numai în constructor)
  - ex:
  nope ```this.state.comment = "blabla";```
  yep ```this.setState({comment: "yolo"});```
- **apelurile setState pot fi asincrone**
  - pentru a actualiza corect value folosim o funcție cu 2 parametri (state, props) în care state și props au **valorile de la momentul în care se face efectiv update-ul**
  - ex:
    nope
      ```
      this.setState({
          counter: this.state.counter + this.props.increment,
      });
      ```
    yep
      ```
      this.setState((state, props) => ({
        counter: state.counter + props.increment
      }));
      ```
- starea unei componente poate fi trimisă mai departe ca props către alte componente (**unidirectional data flow**)
- starea este **încapsulată** (în afara componentei accesul este limitat la starea care a fost share-uită de componentă)


### Lifecycle methods
- pot fi incluse în class components
- componentDidMount() - apelată când o componentă este rendered to the DOM for the first time
- componentDidUnmount() - apelată când DOM-ul produs de componentă este eliminat


### Rendering elements
- cum includ o componentă React în HTML? folosind **ReactDOM.render**
- ex:
  HTML
    ```
    <div id="root"></div>
    ```
  React
    ```
    const element = <h1>Hello, world</h1>;
    ReactDOM.render(element, document.getElementById('root'));
    ```


### Handling events
- pot include evenimente doar că acestea vor fi definite ca **funcții și nu ca apeluri de funcții**
- ex: dacă pentru HTML aș fi scris
    ```
    <button onclick="doSomething()">
        do it
    </button>
    ```
  în React devine
    ```
    <button onClick={doSomething}>
        do it
    </button>
    ```
- common pattern: **event handlers definite ca metode ale clasei**
  - metodele claselor in JavaScript nu sunt [bound](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) by default


### Conditional rendering
- poate fi folosită atunci când vrem să întoarcem un element numai dacă o condiție este adevărată sau nu
    ```
    function BasicParagraph(props) {
        return (
              <div>
                {props.text.length > 0 && <p>{props.text}</p>}
              </div>
        );
      }
    ```
- true && expression = expression
- false && expression = false
- daca condiția este true atunci div-ul va conține un paragraf cu acel text, altfel div este empty


### Inline if-else
- condition ? true : false
- ex:
    ```
    function BasicParagraph(props) {
        return (
              <div>
                {props.text.length > 0 ? <p>Empty paragraph</p> : <p>{props.text}</p>}
              </div>
        );
      }
    ```


### Controlled components
- în HTML: input, textarea, select, etc.
- își mențin starea și se actualizează dacă este cazul
- ex:
    ```
    class TextForm extends React.Component {
        constructor(props) {
              super(props);
              this.state = {
                text: ''
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          handleChange(event) {
            this.setState({
                text: event.target.value
            });
          }

          handleSubmit(event) {
            alert('The text submitted was ' + this.state.text);
            event.preventDefault();
          }

          render() {
            return (
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                  </form>
            );
          }
    }
    ```
- putem adăuga un nume pentru a diferenția input-urile în cazul în care sunt mai multe
- ex:
    ```
    class TextForm extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
                author: ''
                text: ''
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
          }

          handleSubmit(event) {
            alert('The text submitted was ' + this.state.text + ' by the author ' + this.state.author);
            event.preventDefault();
          }

          render() {
            return (
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.author} onChange={this.handleChange} />
                    <input type="text" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                  </form>
            );
          }
    }
    ```


## Resurse
- [Getting started with React - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Documentația oficială React](https://reactjs.org/docs/getting-started.html)
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
