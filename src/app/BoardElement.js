import React, { Component } from 'react';
require("../css/boardElement.scss");

class BoardElement extends Component{
    constructor(){
        super();
        this.state = {
            status:"fa fa-circle-o"
        }
    }

    removeHandler(){
        this.props.remove(this.props.text);
    }

    checkHandler(){
        this.props.done(this.props.text);
    }
    render(){

        return(
            <div className="element">
                <span onClick={this.checkHandler.bind(this)} className="check"><i className={this.state.status} aria-hidden="true"></i></span><li>{this.props.text}</li><span onClick = {this.removeHandler.bind(this)}><i className="fa fa-trash" aria-hidden="true"></i></span>
            </div>

        );

    }
}

export default BoardElement;
