import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import './toggle.css';



export default class App extends Component {
    constructor() {
        super();
        this.toggleRandomCharacter();
    }

    state = {
        counter : true,
        selectedChar : 130,
        error : false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error : true
        })
    }

    toggleRandomCharacter = () => {
        // this.setState({
        //     counter : !this.state.counter // Решение 2 уровня
        // })

        this.setState( state => ({counter: !state.counter })) // Решение 3 уровня

        // if (this.state.counter === true) {
        //     this.setState({
        //         counter : false
        //     })
        // } else if (this.state.counter === false) {  // Решение 1  уровня
        //     this.setState({
        //         counter : true
        //     })
        // }
    }

    render () {
        const {counter} = this.state;

        const characterBlock = counter ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

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
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};