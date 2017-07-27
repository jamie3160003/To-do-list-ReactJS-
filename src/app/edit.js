import React, { Component } from 'react';
import style from "../css/edit.scss";

class Edit extends Component{

    handleSubmit(e){
        e.preventDefault();
        let newElement = this.refs.newElement.value;
        this.props.add(newElement);
        this.refs.newElement.value = "";

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input className="input-box" type="text" required placeholder="Add new tasks..." ref="newElement" />
                <input className="btn-primary" type="submit" value="Add"/>
            </form>
        );
    }

}

export default Edit;
