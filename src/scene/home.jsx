import React, { Component } from 'react'
import Posts from './posts';

import Button from '../shared/btn'

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section className="space-default">
                    <div className="container">
                        <Posts />
                    </div>
                </section>
            </div>
        );
    }
}

export default Products;