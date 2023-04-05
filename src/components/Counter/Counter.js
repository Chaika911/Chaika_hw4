import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            change: false
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){
            console.log(prevState.count);
            this.setState({change: true})
        }
    }


    handler(){
        this.setState((prevState) => ({count: prevState.count + 1}) )
    }

    render(){
        const {change} = this.state;
        return(
            <div>
                <div>{this.state.change && this.state.count}</div>
                <button onClick={this.handler.bind(this)}>componentDidUpdate</button>
            </div>

        )
    }
}


export default Counter;