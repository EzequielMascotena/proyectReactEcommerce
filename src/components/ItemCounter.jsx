import {useState} from "react";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial)

    const handleDecreaseCount = () =>{
        if(count > 1){
            setCount(prev => prev - 1);
        }
    };

    const handleIncreaseCount = () => {
        if(stock > count){
            setCount(prev => prev + 1);
        }
    };

    const handleAdd = () =>{
        onAdd (count);
        setCount (initial);
    };

    return (
        <Container className='mt-2'>
            <Row xs="auto" className= "d-flex justify-content-center mb-1" >
                <Col className='fs-3' onClick={handleDecreaseCount}>-</Col>
                <Badge className='fs-3' bg="dark">{count}</Badge>
                <Col className='fs-3' onClick={handleIncreaseCount} >+</Col>
            </Row>
            <Row xs="auto" className= "d-flex justify-content-center">
                <Button className='fs-5' variant="dark" onClick={handleAdd}>Agregar producto</Button>
            </Row>
        </Container>
    )
}