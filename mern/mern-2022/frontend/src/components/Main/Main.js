import React, {useState} from "react";
import "./Main.css";
import {Button} from "react-bootstrap";


const Main = (props) => {

    const [clicked, setClicked] = useState(props.noOfClick);
    const [bogdan, setBogdan] = useState(0);

    const items = ["Bogdan", "Stefan", "Rares", "Alexandra", "Robert"];
    const display = [];

    for (let i = 0; i < items.length; i++)
        display.push(<p> {i} {items[i]}</p>)

    const pressButton = () => {
        setClicked(clicked + 1);
        setBogdan(bogdan + 3);
    }


    return (
        <div>
            <p>Am deschid primul nostru proiect!</p>
            <p>Am deschid primul nostru proiect!</p>
            <p>Ana are mere!</p>
            <p>FR App FTW</p>
            <Button onClick={() => pressButton()}>Apasa-l</Button>
            <h2>Ai apasat butonul de {clicked} ori</h2>
            <h3>Bogdan a aparsat de {bogdan} ori</h3>
            {display}
            {
                items.map((values) => {
                    return <h2>{values}</h2>
                })
            }
        </div>
    );
}

export default Main;