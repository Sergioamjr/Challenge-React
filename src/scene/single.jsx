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
import Sidebar from './sidebar'
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
                    <div className="container">
                        <Link style={StyleButton.primary} to="/">Voltar</Link>
                        <div style={{marginTop: 15}} className="grid">
                            <div className="sm-8-12">
                                <figure>
                                    <img src={content.image} alt={content.title} />
                                </figure>
                                <h2>{content.title}</h2>
                                <p>{content.content}</p>
                            </div>
                            <div className="sm-4-12">
                                <Sidebar match={this.props.match} />
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