import React, { Component } from 'react'
class Like extends Component {
    state = {}
    // handleChange=()=>{}

    render() {
        let classes = "fa fa-heart";
        if (!this.props.liked) classes += '-o';
        return <i className={classes} aria-hidden="true"></i>;
    }
}

export default Like;