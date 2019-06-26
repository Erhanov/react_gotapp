import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import BookItem from '../pages/bookItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './toggle.css';
import '../../index.css';



export default class App extends Component {

    render () {
        return (
            <Router>
                <> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                <RandomChar/>
                            </Col>
                        </Row>
                        <Route path='/' exact component={() => <h1 className='welcome rounded'>Welcome to GOT DB</h1>} />
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/houses' component={HousePage} />
                        <Route path='/books' exact component={BookPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;

                                return <BookItem bookId={id} />
                            }
                        }></Route>
                    </Container>
                </>
            </Router>
        );
    }
};