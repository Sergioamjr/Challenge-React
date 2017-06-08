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
        textTransform: "capitalize",
        width: "100%",
    },
    group: {
        marginBottom: "15px"
    }
}

class Form extends Component {
    constructor({posts, functions, props}) {
        super(props);
        this.state = {
            'all': posts.all,
            'formOptions': getAll()
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
    const 
        term = e.target.id,
        value = e.target.value;
        const postsFiltered = filterPosts(value, term);
        this.props.functions(postsFiltered);
    }

    render() {
        var arr = this.state.formOptions, years = [], genero = [];
        for (var i = 0; i < arr.length; i++) {
            if(years.indexOf(arr[i].year)) {
                years.push(arr[i].year);
            }
        }

        arr.map((v, key) => v.categories.filter((c, index) => !genero.includes(c) ? genero.push(c) : ''));

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
                            {years.sort().map((e, key) => <option key={key} value={e}>{e}</option>)};
                        </select>
                    </div>
                    <div className="input-group" style={style.group}>
                        <label htmlFor="category">Categoria</label>
                        <select className="filter_input" style={style.input} onChange={this.handleChange} name="category" id="category">
                            <option value="">Selecione a categoria</option>
                            {genero.map((e, key) => <option style={{textTransform: "capitalize"}} key={key} value={e}>{e}</option>)};
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