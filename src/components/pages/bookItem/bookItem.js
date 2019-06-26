import React, {Component} from 'react';
import gotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class BookItem extends Component {
    gotService = new gotService();

    render() {
        return (
            <>
                <ItemDetails 
                    charId={this.props.bookId}
                    getData={this.gotService.getBook}>
                    <Field field='numberOfPages' label='NumberOfPages'/>
                    <Field field='publisher' label='Publisher'/>
                    <Field field='released' label='Released'/>
                </ItemDetails>
                <Button 
                    className='bottomMargin' 
                    outline color="primary">
                        <Link to='/books/'>Back</Link>
                </Button>
            </>
        )
    }
}