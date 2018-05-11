import React, {Component} from 'react';

class SampleScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            something: "Something"
        }
    }

    render(){
        return(
            <p className="something">{this.state.something}</p>
        )
    }
}


export default SampleScreen;