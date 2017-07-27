import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BoardElement from './BoardElement.js';
import Edit from "./edit.js";
import FinishedElement from "./finishedElement.js"
require("../css/board.scss");

class Board extends Component {
    constructor(){
        super();
        this.state={
            element:[],
            finished:[],
            done_display:"none"
        };
    }

    remove(element){
        let newListUndone = this.state.element.filter(
            (x) => {return x!=element;}
        );
        let newListDone = this.state.finished.filter(
            (x) => {return x!=element;}
        );

        //if there's no more element in the done list, display change to none.

        if(newListDone.length == 0) this.setState({done_display:"none"});


        this.setState({
            element : newListUndone,
            finished : newListDone
        });

    }

    add(element){
        let newList = this.state.element;
        newList.push(element);
        this.setState({element:newList});
    }

    done(element){
        this.remove(element);
        let newList = this.state.finished;
        newList.push(element);
        this.setState({
            done_display: "display",
            finished : newList
        });
    }

    unDone(element){
        this.remove(element);
        this.add(element);
    }

    render(){
        let list = this.state.element.map(
            (x) => {return <BoardElement text = {x} done = {this.done.bind(this)} remove = {this.remove.bind(this)} />}
        );
        let listDone = this.state.finished.map(
            (x) => {return <FinishedElement text = {x} unDone = {this.unDone.bind(this)} remove = {this.remove.bind(this)} />}
        );
        console.log(list);
        return (
            <div className="board">
                <h1 className="title">To-Do List:</h1>
                {list}
                <div>
                    <h2 className = {this.state.done_display}>Done</h2>
                    {listDone}
                </div>

                <Edit add = {this.add.bind(this)}/>
            </div>
        );
    }
}


ReactDOM.render(
    <Board />,
    document.getElementById('root')
);
