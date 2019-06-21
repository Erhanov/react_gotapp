import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotServices from '../../services/gotService';
import './toggle.css';



export default class App extends Component {
    constructor() {
        super();
        this.toggleRandomCharacter();
    }

    state = {
        counter : true
    }

    toggleRandomCharacter = () => {
        if (this.state.counter === true) {
            this.setState({
                counter : false
            })
        } else if (this.state.counter === false) {
            this.setState({
                counter : true
            })
        }
    }

    render () {
        const {counter} = this.state;

        const characterBlock = counter ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {characterBlock}
                        </Col>
                    </Row>
                    <Button className='bottomMargin' outline color="primary" onClick={this.toggleRandomCharacter}>Toggle Random Character</Button>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};