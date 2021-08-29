import React from "react";

class Home extends React.Component{
    componentDidMount() {
        if(localStorage.length !==0)
            window.location.href = "/chat"
        else
            window.location.href = "/login"
    }
    render() {
        return(
            <p>Hello</p>
        )
    }
}
export default Home