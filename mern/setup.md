# Setup
## NPM & Node.js
### 1. Windows
  - [Download Node.js from here (windows installer)](https://nodejs.org/en/download/).
  - Close any terminals that are already open. Open a new terminal and run the commands:
    ```
    node -v
    npm -v
    ```
  - The output must be something like node >= 10.x.x și npm >= 6.x.x.
### 2. Linux
  - Installing nvm (the link should be updated with the newest version):
    ```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    nvm --version
    ```
  - If it doesn't show the version, run ```touch ~/.bash_profile``` and the previous commands again.
  - Installing node and npm:
    ```
    nvm install node
    nvm use node
    node -v
    npm -v
    ```
### NVM vs NPM
- NVM = Node Version Manager
- NPM = Node Package Manager

## MongoDB
- [Install MongoDB Community from here](https://docs.mongodb.com/manual/administration/install-community/).
- Open a new terminal/command prompt session and run ```mongo --port PORT_NO``` or only ```mongo``` and the port will have the default value 27017.
- Make sure to [update the Path variable](https://stackoverflow.com/questions/15053893/mongod-command-not-recognized-when-trying-to-connect-to-a-mongodb-server) if an error like **"'mongo' is not recognized as an internal or external command, operable program or batch file"** pops up.
- In the same terminal we will create a new user for accessing the database. For simplicity it will have complete access:
  ```
  use admin
  db.createUser({
	user: "myUserAdmin",
	pwd: "user",
	roles: [ {role: "userAdminAnyDatabase", db: "admin"}, "readWriteAnyDatabase" ]
  })
  ```
- The connection link is **mongodb://127.0.0.1:PORT_NO**.
- [MongoDB Compass](https://www.mongodb.com/products/compass) is very useful for visualizing the database.

## Working with the Github repository
- [Github CLI](https://cli.github.com/)
- [Github Desktop](https://desktop.github.com/)

## IDE
Some of the JavaScript IDEs:
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Visual Studio Code](https://code.visualstudio.com/)
