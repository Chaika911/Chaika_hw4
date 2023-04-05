import React from "react";

class CounterModified extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.count <= 3){
            return true;
        }
        console.log('спрацювала умова не більше 3');
        return false;
    }


    handler(){
        this.setState((prevState) => ({count: prevState.count + 1}) )
    }

    render(){
        return(
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.handler.bind(this)}>shouldComponentUpdate</button>
            </div>

        )
    }
}


export default CounterModified;