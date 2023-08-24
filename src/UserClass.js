import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log(props)

        this.state={
            count:0,
            
        }
    }

    componentDidMount(){
        console.log("Child Mounted")
    }
  
    render(){
        const handleCount =()=>{
        this.setState({
            count:this.state.count+1
        })
        }
    
        const {name,location} = this.props;
        const {count}=this.state; 
        return(
            <div>
                <h1>Count: {count}</h1>
                <button onClick={handleCount}>Counter</button>
                <h1>{name}</h1>
                <p>{location}</p>
            </div>
        )
    }
}

export default UserClass;