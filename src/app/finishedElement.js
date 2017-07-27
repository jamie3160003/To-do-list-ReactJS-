import React, { Component } from 'react';
import style from "../css/finishedElement.scss";

class FinishedElement extends Component{
    constructor(){
        super();
        this.state = {
            status:"fa fa-check-circle"
        }
    }

    removeHandler(){
        this.props.remove(this.props.text);
    }

    unDoneHandler(){
        this.props.unDone(this.props.text);
    }


    render(){

        return(
            <div className="element finished">

                <span className="check" onClick={this.unDoneHandler.bind(this)}>
                    <i className={this.state.status} aria-hidden="true"></i>
                </span>

                <li>{this.props.text}</li>

                <span onClick = {this.removeHandler.bind(this)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </span>

            </div>

        );

    }
}

export default FinishedElement;
