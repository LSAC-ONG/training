import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './chat.css'
import Sockets from "../Sockets";

const Chat = (props)=>{
        if(localStorage.length === 0)
            window.location.href ="/login"
        const username = localStorage.username
        const id = localStorage.id
        const { messages, users, sendMessage} = Sockets(id, username)

        let profile_pic = localStorage.profile_picture
        let message = ""
        const [chating_with, setChatting_with] = useState("")
    const messageChange = (e) =>{
        message = e.target.value
    }
    const FormSubmit = (e) =>{
        e.preventDefault();
        let msg= {
            room_id: chating_with,
            sender_name: username,
            message: message
        }

        sendMessage(msg)
        e.target.querySelector("#messageInput").value = ""
    }
    function Update_correspondents(e){
        setChatting_with(() =>e.target.parentNode.querySelector("#user_id").textContent)
        console.log("Update_correspondents")
        console.log(chating_with)
    }

    const renderChats = () =>{
        let result = []
        users.forEach(user =>{
            result.push(
                <div>
                    <li className={"flex_custom"} onClick={Update_correspondents}>
                        <img src={user.profile_picture}/>
                        <p className={"text-white truncate padding_profile"}>{user.username}</p>
                        <p hidden={true} id={"user_id"}>{user.id}</p>
                    </li>
                </div>
            )
        })
        return result;
    }
    const renderMessages = (e) =>{
        let result = [];
        let msg = [];
        // let messages = this.state.messages
        // let chat_with = chating_with
        if(!messages)
            return ;
        console.log('siopHN{osirahgniobhnoi')
        console.log(messages)
        console.log("Chatting with")
        console.log(chating_with)
        messages.forEach((message)=>{
            if(message.room_id === chating_with || message.room_id === id)
                msg.push(message)
        })
        // console.log(messages)
        msg.forEach((message) =>{
            result.push(
                <p className={"text-white"}>{message.sender_name} : {message.message}</p>
            )
        })
        return result;
    }

    const LogOut = (e) =>{
        localStorage.clear();
        window.location.href ='/login'
    }

    return(
        <Container>
            <Row>
                <Col lg={3} className={"limit_height"}>
                    <div className={"flex_custom"} /*onClick={this.addUsers}*/>
                        <img src={profile_pic}/>
                        <p className={"text-white truncate padding_profile"}>{username}</p>
                        <label onClick={LogOut} className={"text-white"}>Log Out</label>
                    </div>
                    <ul id={"mesageri"}>
                        {renderChats()}
                    </ul>
                </Col>
                <Col lg={9} className={"limit_height"}>
                    {renderMessages()}
                </Col>
            </Row>
            <Row>
                <Form onSubmit={FormSubmit}>
                    <Row className="align-items-center">
                        <Col lg={8} xs="auto">
                            <Form.Control
                                id="messageInput"
                                placeholder="Message..."
                                onChange={messageChange}
                            />
                        </Col>

                        <Col lg={4} xs="auto">
                            <Button type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    )
}

export default Chat