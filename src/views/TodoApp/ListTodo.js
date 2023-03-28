import React, { Component } from "react";
import AddTodo from "./AddTodo";
import "./listTodo.scss"
import { toast } from 'react-toastify';
class ListTodo extends Component {

    state = {
        arrListTodo: [
            { id: '1', title: 'Chuyen de' },
            { id: '2', title: 'phat trien' },
            { id: '3', title: 'Web' },
        ],
        editTodo: {}
    }

    arrNewTodo = (todo) => {
        this.setState({
            arrListTodo: [...this.state.arrListTodo, todo]
        })
        toast("Add success!")
    }


    handlOnclickDelete = (todo) => {
        let currenJobs = this.state.arrListTodo;
        currenJobs = currenJobs.filter(item => item.id !== todo.id)
        this.setState({
            arrListTodo: currenJobs
        })
        toast("Delete success!")
    }

    handlOnclickEdit = (todo) => {
        let { editTodo, arrListTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;


        //save 
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTOdoCopy = [...arrListTodo];
            //js update object in array
            let objIndex = listTOdoCopy.findIndex((item => item.id === todo.id));
            //Log object to Console.
            ///console.log("Before update: ", listTOdoCopy[objIndex])
            //Update object's name property.
            listTOdoCopy[objIndex].title = editTodo.title;
            this.setState({
                arrListTodo: listTOdoCopy,
                editTodo: {}
            })
            toast("Edit success!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo

        })
    }

    handlOnchange = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { arrListTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0; //length = 0 thi trar ra bieten true (là editTodo rỗng)
        console.log("check empty object: ", isEmptyObj)
        return (
            <>
                <AddTodo
                    arrNewTodo={this.arrNewTodo}
                />
                {arrListTodo && arrListTodo.length > 0 && arrListTodo.map((item, index) => {
                    return (
                        <div className="ListTodo" key={item.id}>

                            {isEmptyObj === true ?
                                <span>{index + 1} - {item.title}</span>
                                :
                                <>
                                    {editTodo.id === item.id ?
                                        <span >
                                            {index + 1} - <input value={editTodo.title}
                                                onChange={(event) => this.handlOnchange(event)}
                                            />
                                        </span>
                                        :
                                        <span>{index + 1} - {item.title}</span>
                                    }
                                </>

                            }
                            <button className="edit" onClick={() => this.handlOnclickEdit(item)}>
                                {isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}</button>
                            <button className="delete"
                                onClick={() => this.handlOnclickDelete(item)}
                            >Delete</button>
                        </div>
                    )
                })}
            </>
        )
    }
}
export default ListTodo