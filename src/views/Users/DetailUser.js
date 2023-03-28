import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class DetailUers extends Component {

    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`);

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }

    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <>
                <div>
                    XIn chao {this.props.match.params.id}

                </div>
                {isEmptyObj === false &&
                    <>
                        <div>
                            User's name: {user.first_name} - {user.last_name}
                        </div>
                        <div>User's email: {user.email}</div>
                        <div className="img">
                            <img src={user.avatar} width="100" height="100" />
                        </div>

                    </>
                }
            </>
        )
    }
}
export default withRouter(DetailUers)