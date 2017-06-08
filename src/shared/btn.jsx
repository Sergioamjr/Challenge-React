import React, { Component } from 'react';

const style = {
  color: '#fff',
  textDecoration: 'none',
  padding: '5px 10px',
  display: 'inline-block',
  backgroundColor: '#4472CA'
};

class A extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a style={style} href="#">{this.props.text}</a>
    }
}

export default A;