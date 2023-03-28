import React from "react";
class AddComponent extends React.Component {

    state = {
        titel: '',
        salary: ''
    }
    // nhap vao gia tri 
    handleOnChangeTitel = (event) => {
        this.setState({
            titel: event.target.value,
        })
    }
    // nhap vao gia tri
    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handlSubmit = (event) => {
        event.preventDefault()
        console.log("check input: ", this.state)

        if (!this.state.titel || !this.state.salary) {
            alert("Missing required params")
        }

        //even show value for chillComponent
        this.props.addNewJob(
            {
                id: Math.floor(Math.random() * 100),
                titel: this.state.titel,
                salary: this.state.salary
            }
        )

    }
    render() {
        return (
            <form >
                <label htmlFor="fname">titel:</label>
                <input type="text" value={this.state.titel}
                    onChange={(event) => this.handleOnChangeTitel(event)} /><br />
                <label htmlFor="lname">salary:</label>
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleOnChangeSalary(event)} /><br />

                <input type="submit"
                    onClick={(event) => this.handlSubmit(event)} />
            </form>
        )
    }
}
export default AddComponent