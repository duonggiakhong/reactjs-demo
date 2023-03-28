import React, { Component } from "react";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import { withRouter } from "react-router-dom";
class ListUser extends Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        ////Check dữ liệu data tồn tại
        // axios.get('https://reqres.in/api/users?page=1')
        //     .then(res => {
        //         console.log("check empty object: ", res.data.data)
        //     })


        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handlOnclickId = (user) => {
        this.props.history.push(`user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <>
                <div>
                    <h3 className="titel">Danh sach</h3>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <div className="list-user-contenr" key={item.id}
                                onClick={() => { this.handlOnclickId(item) }}

                            >
                                <span>{item.id} - {item.first_name}</span>
                            </div>
                        )
                    })}

                </div>
            </>
        )
    }
}
export default withRouter(ListUser)