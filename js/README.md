## Training JavaScript

## Prerequisites
- None! Javascript is the programming language of the browser ;)
- [The Javascript Bible](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Ce cunostinte vei dobandi in urma trainingului
- Unde e folosit javascript si de ce sta la baza webului
- Cunostinte basic de javascript, variabile, loops, conditionals, classes, etc
- Cunostinte basic pentru manipularea paginilor cu javascript

## De ce Javascript?

**99.9%** din paginile web pe care le accesati (inclusiv aceasta) ruleaza cod JavaScript in spate. Ruleaza nativ in browsere, si este foarte puternic. Cu diverse biblioteci (NodeJS, Express) se pot creea inclusiv site-uri complete, de la 0, folosind doar javascript.

Este metoda principala folosita pentru a crea pagini dinamice pe partea de client, la interactiunea utilizatorului (click-uri, de exemplu).

**ATENTIE!** StackOverflow, chiar daca in general e bun, pe partea de JS e plin de cod scris foarte prost si solutii de la oameni care n-au habar de good practices (cea mai buna sursa e [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript), incercati sa cautati aici prima data)

## Cum scriem cod javascript?

Codul JavaScript trebuie inclus intr-o pagina html prin tag-ul ```<script>```. Acesta poate fi folosit in 2 moduri:
- Inline (de preferat la finalul paginii, ca sa nu se ingreuneze incarcarea)
    ``` 
    <script>
        alert('Hello World');
    </script>

- Fisier Separat
    ```
    <script src="main.js"></script>
    ```
    ```
    $ cat main.js
    alert('Hello World');
    ```

## Output (debugging)

Apasati F12 si duceti-va la tabul de console. Consola e echivalentul terminalului in care ati rula un cod C. Ca sa scriem in consola, putem folosi:

```js
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');
```

## Variabile

Javascript e un limbaj **WEAKLY TYPED**, spre deosebire de limbaje mai restrictive ca Java si C, care sunt **STRONGLY TYPED**. Daca in C trebuie neaparat sa dam tipul unei variabile cand o declaram (```int n = 5```), JavaScript va face ceea ce se numeste *inferenta de tip* asemanator Python si va deduce automat tipul.

Variabilele se declara folosind keyword-urile ```const``` si ```let```. (exista si ```var``` dar [nu este deloc recomandat](https://discuss.codecademy.com/t/whats-wrong-with-var/224975) sa il folositi, e mai mult tinut pentru backwards compatibility).

```js
const age = 30;

age = 15; // error: can't reassign const
```

```js
let age = 30;

age = 15; // Ok
```

## Tipuri de date
Stai.. mai sus scrie ca javascript e weakly typed? Cum adica tipuri de date? Da, JS e weakly typed, dar tot are o reprezentare interna a variabilelor, singura diferenta e ca nu depinde de utilizator sa specifice tipul explicit.

```js
const name = 'Mihai Lupea';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined
```

## Strings

JavaScript are o multitudine de functii ajutatoare pentru string-uri, si este bine sa va obisnuiti sa le cautati si sa le folositi.

```js
const s = 'Hello World';
let val;

// Get length
val = s.length; // 11

// Change case
val = s.toUpperCase(); // HELLO WORLD
val = s.toLowerCase(); // hello world

// Get sub string
val = s.substring(0, 5); // Hello

// Split into array
val = s.split(''); // ["Hello", "World"]
```

**Concatenari**
- Asa NU: ``` let str = "Ana are" + nr_mere + "mere si" + nr_pere + "pere" ```
- Asa DA: ``` let str = `Ana are ${nr_mere} si ${nr_pere} pere` ``` (similar cu fstrings din Python)

## Arrays (vectori)

Este un tip de date care este foarte folosit si e asemanator cu cel din limbajele standard.

```js
// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get "oranges" value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// Get index
console.log(fruits.indexOf('oranges'));
```

## Objects (JSON)

Obiectele reprezinta o modalitate foarte populara de a organiza datele (exista o intreaga paradigma in jurul lor, se invata in anul 2 la materia POO). Acestea sunt prezente si in JS, ba chiar mai mult, au definit un standard international de comunicare intre servicii: [JSON](https://en.wikipedia.org/wiki/JSON).

```js
const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Get single value
console.log(person.name)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = 'jdoe@gmail.com';
```

## Conditionals
- If
    ```js
    const x = 30;

    if(x === 10) {
        console.log('x is 10');
    } else if(x > 10) {
        console.log('x is greater than 10');
    } else {
        console.log('x is less than 10')
    }
    ```
- Switch
    ```js
    color = 'blue';

    switch(color) {
    case 'red':
        console.log('color is red');
    case 'blue':
        console.log('color is blue');
    default:  
        console.log('color is not red or blue')
    }
    ```
- Ternary Operator (shorthand if)
    ```js
    const z = color === 'red' ? 10 : 20;
    ```

**Observatie**. ```===``` fata de ```==``` verifica si tipul variabilei , nu doar continutul.
- ``` "10" == 10 ``` -> true
- ``` "10" === 10 ``` -> false

## Loops
- For
    ```js
    for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
    }
    ```
- While
    ```js
    let i = 0
    while(i <= 10) {
        console.log(`While Loop Number: ${i}`);
        i++;
    }
    ```
- Parcurgeri
    ```js
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    ```
    ```
    for(let element of arr) {
        console.log(element);
    }
    ```

## Functii
```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Mihai"));
```

Interesting topic: [Javascript Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

## High Order Array Functions
De obicei destul de uzuale cand lucram cu array-uri, ele deriva din Programarea Functionala, o alta paradigma (JS e un limbaj multi-paradigm).
- ```arr.forEach(func)``` -> apeleaza func pe toate elementele array-ului
- ```arr.map(func)``` -> apeleaza func pe toate elementele array-ului si construieste un array de aceeasi dimensiune cu rezultatele
- ```arr.filter(func)``` -> apeleaza func pe toate elementele si returneaza o lista doar cu elementele unde func a returnat true

```js
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  }
];

todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1; 
});
```

## DOM Manipulation

DOM = Document Object Model. Pe romaneste, cum manipulam elementele din pagina.

TODO
