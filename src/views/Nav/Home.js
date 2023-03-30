import React, { Component } from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
// import avata from "../../assets/imges/avata.jpg";
import { connect } from 'react-redux'

class Home extends Component {

    //SetTimeOut chuyển sang trang khác 
    // componentDidMount: nó là một cái live sai cồ (ko pit ghi sao)
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push("/MyComponent")
    //     }, 3000);
    // }


    handlDeleteUser = (users) => {
        console.log("=>>> check user delete: ", users)
        this.props.deleteUserRedux(users);
    }

    handlCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        let listUsers = this.props.dataRedux;
        console.log(">>> xheck props: ", this.props.dataRedux)
        return (
            <>
                <div>Wellcome to Home</div>

                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => { this.handlDeleteUser(item) }}>x</span>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => { this.handlCreateUser() }}>Add new</button>
                </div>
            </>
        )
    }
}
// export default withRouter(Home)  

//Mapping State Redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
//xoa 
const mapDispathToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payLoad: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }


}

export default connect(mapStateToProps, mapDispathToProps)(Color(Home));