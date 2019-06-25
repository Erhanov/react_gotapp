import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemListGroup = styled.ul`
    .list-group-item {
        cursor: pointer;
    }
`
export default class ItemList extends Component {

    state = {
        itemList : null,
        loading : true,
        error : false
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => {this.props.onItemSelected(item.id);} }>
                    {label}
                </li>
            )
        })
    }

    onCharLoaded = (itemList) => {
        this.setState({
            itemList,
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

        const {itemList, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const items = !(loading || error) ? this.renderItems(itemList) : null; 


        return (
            <ItemListGroup className="list-group">
                {errorMessage}
                {spinner}
                {items}
            </ItemListGroup>
        );
    }
}