import React from "react";

class List extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        alert('компонент відкрився')
    }

    componentWillUnmount(){
        alert('компонент закрився')
    }




    render(){
        return(
            <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </ul>
        )
    }


}

export default List;