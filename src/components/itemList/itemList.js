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
                    onClick={() => {this.props.onCharSelected(item.id);}  }>
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