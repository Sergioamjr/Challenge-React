import React, { Component } from 'react';
import Button from './btnicon';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import StyleButton from '../style/btn'

const style = {
    "box": {
        "marginBottom": "25px",
        "border":"1px solid #ccc"
    },
    "item": {
        "padding": "10px 15px 20px 15px",
    },
    "image": {
        "overflow": "hidden",
    },
    "p": {
        "marginBottom": "5px",
    }
};

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const obj = this.props.content;
        return (
            <div className="post_item" style={style.box}>
                <figure style={style.image} className="image">
                    <img src={obj.image} />
                </figure>
                <div style={style.item} className="post_item_content">
                    <h2>{obj.title}</h2>
                    <p>Gênero: {obj.genre} </p>
                    <p>Ano: {obj.year}</p>
                    <p style={style.p}>
                        {obj.content.slice(0, obj.content.indexOf(' ', 200))}...
                    </p>
                    <Link style={StyleButton.primary} to={this.props.link}>Ver mais</Link>
                </div>
            </div>
        )
    }
}

export default Card;