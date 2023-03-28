import React, { Component } from "react";
import "./addTodo.scss"
class AddTodo extends Component {

    state = {
        title: ''
    }

    heandlOnclick = () => {

        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
        }

        if (!this.state.title) {
            alert("Missing required params")
            return;
        }
        this.props.arrNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    heandlOnchange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    render() {
        let { title } = this.state;
        return (
            <>
                <div>
                    <div className="inputTodo">
                        <input value={title} type={'text'} onChange={(event) => this.heandlOnchange(event)}></input>
                        <button type="button" onClick={() => this.heandlOnclick()}>Add</button>
                    </div>
                </div>
            </>
        )
    }
}
export default AddTodo