import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            "header": {
                "backgroundColor": "#0376da",
                "color": "#fff",
                "fontSize": "1.4rem",
                "padding": "15px 0"
            },
            "a": {
                "color":"#fff",
                "textDecoration":"none"
            }
        }
        return (
            <header style={style.header}>
                <div className="container">
                    <Link to="/" style={style.a}><h1>BlueFlix</h1></Link>
                </div>
            </header>
        )
    }
}

export default Header