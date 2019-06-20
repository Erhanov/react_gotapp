import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotServices from '../../services/gotService';
import './toggle.css';

const toggleRandomCharacter = () => {
    let randomBlock = document.querySelector('.offset-lg-0');
    randomBlock.style.display = (randomBlock.style.display === 'block') ? 'none' : 'block'
}

const App = () => {
    return (
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
                <Button className='bottomMargin' outline color="primary" onClick={toggleRandomCharacter}>Toggle Random Character</Button>
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
};

export default App;