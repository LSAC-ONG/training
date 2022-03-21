# Create a new MERN project

## Create a separate directory
```
mkdir new_project
cd new_project
```

## Create the Node project
```
mkdir backend
cd backend
npm init -y
```

## Create the React project
```
# go back to the parent directory new_project
npx create-react-app new_project
mv new_project frontend
```

## Use Express to create a simple webserver
[Express](https://expressjs.com/) is a framework useful for handling requests. The server will listen on port 5000 and will log a message.
```
const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Hellooo ${PORT}`);
});
```
Each project (backend/frontend) has its package.json file that contains multiple things. The most important ones are:
- **main** = the entry point of the program
- **scripts** = aliases for running different commands (if we define an entry **"bye": "exit 1"** then the console will be closed if we run ```npm run bye```)

Since we want our server to run this code, we will create a new file **index.js** in the backend directory and paste this code into it. It is the default name of the file, but we can change it by modifying the **main** property from the package.json file.

We also have to install the express package. In a terminal, run the command:
```
npm i express
```

Now we can run the server:
```
node index.js
```

**Nit**: you can also define a script for this in the package.json file:
```
...
scripts: {
  "start": "node index.js"
}
...
```
Running ```npm run start``` is equivalent to ```node index.js```.

## Create a basic API endpoint
Usually, the backend and the frontend communicate through HTTP requests that might have multiple [types](https://www.restapitutorial.com/lessons/httpmethods.html). The endpoints can include parameters for retrieving only some data (e.g., return the team of the user X) or send data (e.g., store the data of this new user that just created their account).

Let's create a simple endpoint that returns the same message always:
```
app.get("/basic", (req, res) => {
  res.json({message: "Atata s-a putut"});
});
```
The **get** method receives two parameters:
- the endpoint's name ("/basic")
- a function that receives a request and a response and does some logic (here, it just includes a JSON object with the message)

**Notes**:
- [JSON objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) sound fancy, but they are not.
- Naming a function is optional in JavaScript. We only use that function here, why name it?
- We also have something called [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). All the following functions are equivalent:
  ```
  function (x, y) {
    return x + y;
  }
  (x, y) => {
    return x + y;
  }
  (x, y) => x + y;
  ```

**Restart the server with CTRL + Z/C and run the command again.**

## Connect the frontend with the backend
The requests made by the React client should go to the Node server. To enable this, include the following line in the package.json file from the frontend directory:
```
...
"proxy": "http://localhost:5000"
...
```

Now we can start the React app by running:
```
cd frontend
npm start
```

## Make a request to the server
In React, we can define components that break down the logic into separate pieces of code (e.g., if a website contains a menu with multiple options, each one can be a component)

A React project contains the directories:
- **node_modules**: the modules installed
- **public**: static files
- **src**: the components

All we need to know is:
- in public/index.html, there is a container with the id **root**
- in src/index.js we render the final component (App.js) in the previous container

App.js is a function that returns the main component, a container.

There are two ways to define components:
1. As functions that generate HTML based on the input provided
2. As classes that might have multiple fields and methods. They **must** implement the function **render** that returns the HTML result

**Let's send a request to the basic endpoint and display the message in the container.**
1. The request must be made every time the page is reloaded.
2. The component's state can store the message. **Props vs state**:
   - A component receives input that is also called props (properties).
   - A component might have variables that change over time (e.g., clicking this button displays either on or off) that form the component's state.
3. The output must include the message.

We'll get through each step for each case: function/class.

### Defining the component as a function

1. [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) can be used to send a request to the endpoint.
  ```
  React.useEffect(() => {
    fetch("/basic").then((res) => res.json()).then((data) => console.log(data.message));
  });
  ```
  - It might take a while to return the response. Therefore, the fetch function is not synchronous (**async**) to not block the website.
  - If the response is received **then** we extract the JSON object.
  - If the JSON is received **then** we print the message.

2. The state must be first initialized (**data** stores the message, and **setData** is a function that can modify it):
  ```
  const [data, setData] = React.useState(null);
  ```
  We will store the message instead of printing it:
  ```
  React.useEffect(() => {
    fetch("/basic").then((res) => res.json()).then((data) => setData(data.message));
  });
  ```
3. To use the data, we have to surround it with brackets:
  ```
  <div className="App">{data}</div>
  ```
The final component is:
```
import React from "react";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/basic").then((res) => res.json()).then((data) => setData(data.message));
  });
  return (<div className="App">{data}</div>);
}

export default App;
```

### Defining the component as a class
1. -- the same --
2. The class contains a constructor where we initialize the state:
  ```
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  ```
  - Without going into too much detail, the class must extend **React.Component** and call **super(props)** in the constructor.
  - **props** contain all the parameters received (e.g., the background color of a page).
  - We can't modify the state directly outside the constructor (only by using the setState function).
  - Creating the request becomes:
  ```
  fetch("/basic").then((res) => res.json()).then((data) => this.setState({data: data.message}));
  ```
3. Accesing the data is similar ```{this.state.data}```.

The final component is:
```
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    fetch("/basic").then((res) => res.json()).then((data) => this.setState({data: data.message}));
  }

  render() {
    return (<div className="App">{this.state.data}</div>);
  }
}

export default App;
```

## (Optional, but highly encouraged) Add nodemon and concurrently
### nodemon
[nodemon](https://www.npmjs.com/package/nodemon) automatically restarts a node application when changes are detected.

Install nodemon ```npm install -g nodemon``` and run the server by ```nodemon index.js```.

**Nit**: Include a separate script in package.json:
```
...
scripts: {
  "server": "nodemon index.js"
...
```

### concurrently
[concurrently](https://www.npmjs.com/package/nodemon) runs multiple commands concurrently.

Install concurrently ```npm install -g concurrently```.

Let's define a script to run both the frontend and the backend. We can run the frontend similarly by pointing to the frontend directory:
```
...
scripts: {
  "frontend": "npm start -prefix ../frontend",
  "server": "nodemon index.js"
...
```
And finally, to run both:
```
...
scripts: {
  "dev": "concurrently \"npm run server\" \"npm run frontend\"",
  "frontend": "npm start -prefix ../frontend",
  "server": "nodemon index.js"
...
```
