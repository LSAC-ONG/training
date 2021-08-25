import React from "react";
import persons from "./persons";
import ContactsList from "./components/ContactsList";

function App() {
    return(
        /**
         *  persons = the persons read from the file that will be included in the list
         *  maxCards = the maximum number of cards that will be displayed at once
         */
        <ContactsList persons={persons} maxCards={3}/>
    );
}

export default App;
