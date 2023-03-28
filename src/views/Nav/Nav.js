import React, { Component } from "react";
import "./nav.scss"
import {
    NavLink //,Link
} from "react-router-dom";

class Nav extends Component {

    render() {

        return (
            <>
                <div className="topnav">
                    <NavLink exact to="/" activeClassName="active" >Home</NavLink>
                    <NavLink to="/MyComponent" activeClassName="active">MyComponent</NavLink>
                    <NavLink to="/LisTodo" activeClassName="active">LisTodo</NavLink>
                    <NavLink to="/User" activeClassName="active">ListUser</NavLink>
                </div>
            </>
        )
    }
}
export default Nav