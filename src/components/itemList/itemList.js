import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemListGroup = styled.ul`
    .list-group-item {
        cursor: pointer;
    }
`
export default class ItemList extends Component {
    
    htmlId = function guidGenerator() {
        let S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    };

    gotService = new gotService();

    state = {
        charList : null,
        loading : true,
        error : false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
                            .then(this.onCharLoaded)
                            .catch(this.onError);
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={item.id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(i + 41)}>
                    {item.name}
                </li>
            )
        })
    }

    onCharLoaded = (charList) => {
        this.setState({
            charList,
            loading : false,
        })
    }

    onError = () => {
        this.setState({
            loading : false,
            error : true,
        })
    }

    render() {

        const {charList, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const items = !(loading || error) ? this.renderItems(charList) : null; 


        return (
            <ItemListGroup className="list-group">
                {errorMessage}
                {spinner}
                {items}
            </ItemListGroup>
        );
    }
}