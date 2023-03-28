import React, { Component } from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";


class Home extends Component {

    //SetTimeOut chuyển sang trang khác 
    // componentDidMount: nó là một cái live sai cồ (ko pit ghi sao)
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push("/MyComponent")
    //     }, 3000);
    // }


    render() {

        return (
            <>
                Wellcome to Home

            </>
        )
    }
}
// export default withRouter(Home)  
export default Color(Home)