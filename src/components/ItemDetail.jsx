import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export const ItemDetail = ({ item }) => {
    return (
        <>
            <h1>{item.title}</h1>
            <Card>
                <Card.Img variant="top" src={item.pictureUrl} alt={item.alt} />
                <Card.Body>
                    <Card.Text className='fs-3'>
                        Descripcion: {item.description}.
                    </Card.Text>
                    <h2>
                        <Badge bg="dark">${item.price}.-</Badge>
                    </h2>
                </Card.Body>
            </Card>
        </>
    );
};


