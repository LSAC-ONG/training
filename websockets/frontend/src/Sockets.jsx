import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const new_user_event = "newUser"
const SOCKET_SERVER_URL = "http://localhost:5000";

const Sockets = (userID, name) => {
    const [messages, setMessages] = useState([]); // Sent and received messages
    const [users, setUsers] = useState([]); // received users
    const socketRef = useRef();

    useEffect(() => {

        // Creates a WebSocket connection
        socketRef.current = io(SOCKET_SERVER_URL, {
            query: {
                roomId:userID,
                name
            },
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd"
            }
        });

        // Listens for incoming messages
        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, async (message) => {
            const incomingMessage = message.body
            await setMessages((messages) => [...messages, incomingMessage]);
        });
        socketRef.current.on("users_list_fetched", (users_received) =>{
            // console.log(users_received)
            setUsers(() => users_received)
        })

        // Destroys the socket reference
        // when the connection is closed
        return () => {
            socketRef.current.disconnect();
        };
    }, [userID]);

    // Sends a message to the server that
    // forwards it to all users in the same room
    const sendMessage = (messageBody) => {
        console.log(messageBody)
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socketRef.current.id,
        });
    };

    return { messages, sendMessage, users };
};

export default Sockets;