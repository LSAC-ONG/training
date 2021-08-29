import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {v4 as uuid} from "uuid";
const axios = require('axios')
const qs = require("querystring")

class LogIN extends React.Component{
    constructor(props) {
        super(props);
        this.submitUsername = this.submitUsername.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.state = {
            username:""
        }
    }


    submitUsername = (e) =>{
        e.preventDefault()
        // let id = uuid()
        console.log(localStorage)
        axios({
            method:"post",
            url:"/signIn",
            data:qs.stringify({username:this.state.username})
        }).then(res =>{
            console.log(res.data)
            localStorage.setItem("username",res.data.username)
            localStorage.setItem("id",res.data.id)
            localStorage.setItem("profile_picture",res.data.profile_picture)
            window.location.href = "/chat"
        })
    }
    changeUsername = (e) =>{
        this.setState({username:e.target.value})
    }
    render() {
        return (
            <Form onSubmit={this.submitUsername}>
                <Row className={"text-white padding_25  justify-content-md-center"}>
                    <Col md={{span: 4}} className={"bg-secondary form_body"}>
                        <Form.Group as={Row} className="mb-3 text-center font-weight-bold text_fancy" controlId="formBasicEmail">
                            <Form.Label>Please introduce a name before joining</Form.Label>
                            <Form.Control type="username" placeholder="Enter Username" onChange={this.changeUsername}/>
                        </Form.Group>
                        <Form.Group as={Row} className={" justify-content-md-center"}>
                            <Button variant="primary" type="submit" className={"col-lg-4 submit_btn"}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        );
    }
}
export default LogIN;