import React from "react";
import List from "../List/List";

class ShowComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isVisible : true
        }
        this.handler = this.handler.bind(this);
    }


    handler(e){
        this.setState(prev => ({isVisible: !prev.isVisible}))
    }

    render() {
        return(
            <div>
                <button onClick={this.handler}>Click for view or hidden</button>
                {this.state.isVisible && <List />}



            </div>
            )
    }
}

export default ShowComponent;