import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Header from '../scene/header'
import { getSingle } from '../services/index';
import Button from '../shared/btn'

import StyleButton from '../style/btn'

class Single extends Component {
    constructor(props) {
        super(props);
        var single = getSingle(this.props.match.params.id);
        this.state = {
            'single': single,
        }
    }

    render() {
        const content = this.state.single;
        if(content) {
            return (
                <section className="space-default">
                    <div className="container max-width-content">
                        <Link style={StyleButton.primary} to="/">Voltar</Link>
                        <div style={{marginTop: 15}} className="grid">
                            <div className="sm-12-12">
                                <figure>
                                    <img src={content.image} alt={content.title} />
                                </figure>
                                <h2 style={{margin: "20px 0 10px 0", textTransform: "uppercase"}}>{content.title}</h2>
                                <p style={{marginBottom: "10px", color: "#818181"}}>Gênero: {content.genre} </p>
                                <p style={{marginBottom: "10px", color: "#818181"}}>Ano: {content.year}</p>
                                <p>{content.content}</p>
                            </div>
                            
                        </div>
                    </div>
                </section>
            );
        } else {
            return <p>Conteudo não encontrado</p>
        }
    }
}

export default Single;