import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';


export default class BookPage extends Component {
    gotService = new gotService();
    state = {
        selectedChar : 12,
        error : false
    }

    componentDidCatch() {
        this.setState({
            error : true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar : id
        })
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => `${name}`}/>
        )

        const itemDetails = (
            <CharDetails 
                charId={this.state.selectedChar}
                getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}