import React, { Component } from 'react'
import { getAll, filterPosts } from '../services/index';

import StyleA from '../style/btn'
import Card from '../shared/cards'

const style = {
    form: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: 15,
        flexDirection: "column",
        padding: 15,
        border: "1px solid #ccc",
        borderRadius: 4,
    },
    input: {
        height: "40px",
        borderRadius: "3px",
        border: "1px solid #ccc",
        marginLeft: 5,
        width: "100%",
    },
    group: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "15px"
    }
}

class Form extends Component {
    constructor({posts, functions, props}) {
        super(props);
        this.state = {
            'all': posts.all
        };

        this.handleChange = this.handleChange.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    clearFilter() {
        const allposts = getAll();
        this.props.functions(allposts);
        document.getElementById('name').value = '';
        document.getElementById('year').value = '';
        document.getElementById('category').value = '';
    }

    handleChange(e) {
    let inputs = document.querySelectorAll('.filter_input'),
        values = [],
        qntd = [];
    inputs.forEach(function(el) {
        el.value ? qntd.push(el.value) : '';
        values[el.id] = el.value;
    });

    if(qntd.length >= 2) {
        const postsFiltered = filterPosts(values, 'all');
        console.log(postsFiltered);
    } else {
        const 
            term = e.target.id,
            value = e.target.value;
            const postsFiltered = filterPosts(value, term);
            this.props.functions(postsFiltered);
        }
    }


    render() {
         return (
            <div className="containe">
                <form style={style.form}>
                    <div className="input-group" style={style.group}>
                        <p>Filtrar por:</p>
                    </div>
                    <div className="input-group" style={style.group}>
                        <label htmlFor="category">Ano</label>
                        <select 
                            className="filter_input" 
                            style={style.input} 
                            onChange={this.handleChange} 
                            name="year" id="year">
                            <option value="">Selecione o ano</option>
                            <option value="1982">1982</option>
                            <option value="1980">1980</option>
                            <option value="1984">1984</option>
                            <option value="1986">1986</option>
                        </select>
                    </div>
                    <div className="input-group" style={style.group}>
                        <label htmlFor="category">Categoria</label>
                        <select className="filter_input" style={style.input} onChange={this.handleChange} name="category" id="category">
                            <option value="">Selecione a categoria</option>
                            <option value="mafia">Máfia</option>
                            <option value="comedia">Comédia</option>
                            <option value="terror">Terror</option>
                            <option value="drama">Drama</option>
                        </select>
                    </div>
                    <div className="input-group" style={style.group}>
                        <label htmlFor="category">Nome:</label>
                        <input className="filter_input" style={style.input} onChange={this.handleChange} name="name" id="name" type="text"/>
                    </div>
                    <div className="input-group" style={style.group}>
                        <a style={StyleA.danger} color="red" href="#" onClick={this.clearFilter}>
                            Limpar filtros
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;