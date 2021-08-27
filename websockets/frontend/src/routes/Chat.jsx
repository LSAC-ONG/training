import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import './chat.css'

class Chat extends React.Component{
    constructor(props) {
        super(props);
        if(localStorage.length === 0)
            window.location.href ="/login"
        this.username = localStorage.username
        this.id = localStorage.id
        this.profile_pic = localStorage.profile_picture
        this.state = {
            message:'',
            users:[],
            messages:[],
            chating_with:"*" // *=chat general, uuid = chat intre 2 persoane AKA ROOM
        }

        this.FormSubmit = this.FormSubmit.bind(this);
        this.LogOut = this.LogOut.bind(this)
        this.renderChats =  this.renderChats.bind(this)
        this.addUsers = this.addUsers.bind(this)
        this.renderMessages = this.renderMessages.bind(this)
        this.addMessage = this.addMessage.bind(this)
        this.Update_correspondents = this.Update_correspondents.bind(this)
        this.messageChange = this.messageChange.bind(this)
    }
    messageChange = (e) =>{
        this.setState({message:e.target.value})
    }
    FormSubmit = (e) =>{
        e.preventDefault();
        //send message to server
        // console.log(e)
        let messages = this.state.messages;
        messages.push({
            room_id: this.state.chating_with,
            sender_name: "me",
            message: this.state.message
        })

        this.setState({messages: messages})
        // console.log(e.target.querySelector("#messageInput"))
        e.target.querySelector("#messageInput").value = ""
    }
    Update_correspondents = (e) =>{
        e.stopPropagation()
        // console.log(e.target)
        // console.log(e.target.parentNode.querySelector("#user_id").textContent)
        this.setState({chating_with: e.target.parentNode.querySelector("#user_id").textContent})
    }
    addUsers = () =>{
        let users = this.state.users;
        // users.push({
        //     username:'General',
        //     id:"*",
        //     profile_picure:""
        // });
        // users.push({
        //     username:'T1',
        //     id:"id1",
        //     profile_picure:""
        // });
        // users.push({
        //     username:'T2',
        //     id:"id2",
        //     profile_picure:""
        // });
        // users.push({
        //     username:'T3',
        //     id:"id3",
        //     profile_picure:""
        // });
        this.setState({users})
    }
    renderChats = () =>{
        let users = this.state.users;
        let result = []
        users.forEach(user =>{
            result.push(
                <div>
                    <li className={"flex_custom"} onClick={this.Update_correspondents}>
                        <img src={user.profile_picture}/>
                        <p className={"text-white truncate padding_profile"}>{user.username}</p>
                        <p hidden={true} id={"user_id"}>{user.id}</p>
                    </li>
                </div>
            )
        })
        return result;
    }
    addMessage = (data) =>{
        let msg = this.state.messages;
        // msg.push({
        //     room_id:localStorage.getItem("id"),
        //     sender_name: "me",
        //     message: "salut"
        // })
        // msg.push({
        //     room_id:"id3",
        //     sender_name: "T3",
        //     message: "salut"
        // })
        // msg.push({
        //     room_id:"id3",
        //     sender_name: "T3",
        //     message: "Ce faci?"
        // })
        // msg.push({
        //     room_id:"id1",
        //     sender_name:"T1",
        //     message: "Bine. Tu?"
        // })
        // msg.push({
        //     room_id:"id3",
        //     sender_name: "T3",
        //     message: "Bine si eu."
        // })
        // msg.push({
        //     room_id:"id2",
        //     sender_name: "T2",
        //     message: "Bine si eu."
        // })
        // msg.push({
        //     room_id:"id2",
        //     sender_name: "T2",
        //     message: "Bine si eu."
        // })
        // msg.push({
        //     room_id:"id2",
        //     sender_name: "T2",
        //     message: "Bine si eu."
        // })
        // msg.push({
        //     room_id:"*",
        //     sender_name: "T2",
        //     message: "Shampon."
        // })
        // msg.push({
        //     room_id:"*",
        //     sender_name: "T2",
        //     message: "Shampon."
        // })
        // msg.push({
        //     room_id:"id2",
        //     sender_name: "T2",
        //     message: "Bine si eu."
        // })
        this.setState({messages:msg})
    }
    renderMessages = (e) =>{
        let result = [];
        let messages = this.state.messages
        let chat_with = this.state.chating_with
        if(chat_with !== '*'){
            messages = messages.filter((message) =>{
                return message.room_id == chat_with || message.room_id == this.id
            })
        }else {
            messages = messages.filter((message) =>{
                return message.room_id == '*'
            })
        }
        // console.log(messages)
        messages.forEach((message) =>{
            result.push(
                <p className={"text-white"}>{message.sender_name} : {message.message}</p>
            )
        })
        return result;
    }
    componentDidMount() {
        this.addMessage("")
    }

    LogOut = (e) =>{
        localStorage.clear();
        window.location.href ='/login'
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col lg={3} className={"limit_height"}>
                        <div className={"flex_custom"} /*onClick={this.addUsers}*/>
                            <img src={this.profile_pic}/>
                            <p className={"text-white truncate padding_profile"}>{this.username}</p>
                            <label onClick={this.LogOut} className={"text-white"}>Log Out</label>
                        </div>
                        <ul id={"mesageri"}>
                            {this.renderChats()}
                        </ul>
                    </Col>
                    <Col lg={9} className={"limit_height"}>
                        {this.renderMessages()}
                    </Col>
                </Row>
                <Row>
                    <Form onSubmit={this.FormSubmit}>
                        <Row className="align-items-center">
                            <Col lg={8} xs="auto">
                                <Form.Control
                                    id="messageInput"
                                    placeholder="Message..."
                                    onChange={this.messageChange}
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
}

export default Chat