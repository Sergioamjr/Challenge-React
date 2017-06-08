import React, { Component } from 'react'
import { getSidebar } from '../services/index';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Button from '../shared/btn'
import Card from '../shared/cards'

class Sidebar extends Component {
    constructor({match, props}) {
        super(props);
        this.state = {
            "sidebar": getSidebar(match.params.id),
            "match": match
        }
    }

    renderPosts() {
        return this.state.sidebar.map((single, key) => 
            <div className="sm-12-12" key={key}> 
                <Card link={`/single/`+single.id} content={single} />
            </div>
        );
    }

    render() {
         return (
            <div className="containe">
                <div className="grid">
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}

export default Sidebar;