import React, { Component } from 'react'
import { getAll, filterPosts } from '../services/index';

import Form from './form';

import Button from '../shared/btn'
import Card from '../shared/cards'


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'all': getAll(),
        }

        this.changeValue = this.changeValue.bind(this);
    }

    renderPosts() {
        return this.state.all.map((single, key) => 
            <div className="sm-6-12 md-4-12" key={key}> 
                <Card link={`/single/`+single.id} content={single} />
            </div>
        );
    }

    changeValue(e) {
        this.setState({
            'all': e
        })
    }

    render() {
         return (
            <div className="containe">
                <div className="grid">
                    <div className="sm-3-12">
                        <Form functions={this.changeValue} posts={this.state} />
                    </div>
                    <div className="sm-9-12">
                        <div className="grid">
                            {this.renderPosts()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;