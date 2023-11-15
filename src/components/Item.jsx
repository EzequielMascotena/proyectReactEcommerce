import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
    return (        <>
        {['Secondary',
        ].map((variant) => (
            <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Img variant="top" src={item.pictureUrl}  alt={item.alt} height="230px"/>
                <Card.Body>
                    
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className='fs-4'> ${item.price}.- </Card.Text>
                </Card.Body>
                <Link className='mb-2 ms-2' to={`/items/${item.id}`}>
                        <Button variant="dark">Mas detalles</Button>
                </Link>
            </Card>
        ))}
    </>)
}




