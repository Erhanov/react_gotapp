import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

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

        const itemDetails = (
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
            <>
                <RowBlock left={itemList} right={itemDetails}/>
                <Link to='/'>
                    <Button 
                    className='bottomMargin' 
                    outline color="primary">
                        Back
                    </Button>
                </Link>
            </>
        )
    }
}