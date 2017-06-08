import React, { Component } from 'react';

const style = {
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-block',
    backgroundColor: '#4472CA',
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "40px",
};

class ButtonIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a style={style} href="#"> {this.props.text}</a>
    }
}

export default ButtonIcon;