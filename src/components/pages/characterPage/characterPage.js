import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../../rowBlock';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
export default class CharacterPage extends Component {
    gotService = new gotService();
    state = {
        selectedChar : 130,
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
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <CharDetails 
                charId={this.state.selectedChar}
                getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
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