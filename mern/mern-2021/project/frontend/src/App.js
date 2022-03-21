import './App.css';
import React from "react";
import {Button, Form} from "react-bootstrap";

const axios = require("axios");
const qs = require("qs");

/*
function App2() {}

function App1() {
    const [data, setData] = React.useState(this);
    return <App2 />;
}

class App extends React.Component {
    constructor(props) {
        // this.props.name
        // this.props.age
        // number of clicks = 0
        super(props);
        this.state = {
            number_of_clicks: 0,
            name: ""
        }
    }

    helper = (message) {
        // return camel case
    }

    render() {
        // button => number_of_clicks++
        return <App2 />;
    }
}

<App name="a" age=3/>
<App name="a" age=100/>

name = "a"
age = 3

* */

class Cell extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (<th className={this.props.color + " text-white"} scope="col">{this.props.text}</th>);
    }
}

/**
 *
 */

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //colors: [],
            //paragraphs: [],
            params: [
                {
                    color: "bg-secondary",
                    text: "abecedar"
                },
                {
                    color: "bg-info",
                    text: "A"
                },
                {
                    color: "bg-secondary",
                    text: "B"
                },
                {
                    color: "bg-primary",
                    text: "C"
                }
            ]
        }
    }

    render() {
        return (
            <table className="table">
                <tr>
                    {
                        this.state.params.map((param) => {
                            return <Cell color={param.color} text={param.text} />
                        })
                    }
                    {
                        /*
                        <Cell color="bg-secondary" text="abecedar" />
                        <Cell color="bg-info" text="A" />
                        <Cell color="bg-secondary" text="B" />
                        <Cell color="bg-primary" text="C" />
                        */
                    }
                </tr>
            </table>
        );
    }
}

class Formular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        this.changeMessage = this.changeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: "/api/messages/all",
        }).then(res => {
            console.log(res.data);
        });
    }

    changeMessage = event => {
        console.log(event.target.value);
        /*
            setState ASYNC
            this.setState({message: "x"}, () => {})
        * */
        this.setState({message: event.target.value}, () => {
            console.log(this.state.message);
        });
    };

    /*
    * "A " + name
    * `A ${name}`
    * */

    sendMessage = event => {
        event.preventDefault();
        console.log(`submitting ${this.state.message}`);
        axios({
            method: 'post',
            url: "/api/messages/add",
            data: qs.stringify({text: this.state.message})
        }).then(res => {
            console.log(res.data);
        });
    };

    render() {
        return (
            <Form className="p-5" onSubmit={this.sendMessage}>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control onChange={this.changeMessage}/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}

function App() {
    return (
        // <Table></Table>
        <div>
            <Formular />
            <Table />
        </div>
    );
}

export default App;
