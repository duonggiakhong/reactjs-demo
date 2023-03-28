import React from "react";

class Forms extends React.Component {

    state = {
        FirstName: '',
        lastName: ''
    }

    handleOnChangeFistName = (event) => {
        this.setState({
            FirstName: event.target.value,
        })
    }
    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    handlSubmit = (event) => {
        event.preventDefault()
        console.log("check: ", this.state)
        alert("FirstName: " + this.state['FirstName'] + "LastName: " + this.state["lastName"])

    }
    render() {
        return (
            <form >
                <label htmlFor="fname">First name:</label>
                <input type="text" value={this.state.FirstName}
                    onChange={(event) => this.handleOnChangeFistName(event)} /><br />
                <label htmlFor="lname">Last name:</label>
                <input type="text" value={this.state.lastName}
                    onChange={(event) => this.handleOnChangeLastName(event)} /><br />
                <input type="submit"
                    onClick={(event) => this.handlSubmit(event)} />
            </form>
        )
    }
}
export default Forms