import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        const {name,location} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <p>{location}</p>
            </div>
        )
    }
}

export default UserClass;