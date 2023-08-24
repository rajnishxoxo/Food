import UserClass from "./UserClass";

import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){

        console.log("Parent Mounted")
    }

    render(){
        return(
            <div>
                <h1>About us Page</h1>
                <UserClass name="Rajnish" location="Pune-MH" />
            </div>
        )
    }
}


export default About;