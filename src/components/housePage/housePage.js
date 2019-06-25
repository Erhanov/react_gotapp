import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';


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
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => `${name}`}/>
        )

        const charDetails = (
            <CharDetails 
                charId={this.state.selectedChar}
                getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='AncestralWeapons'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}