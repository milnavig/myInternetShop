import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../index';
import StarRatings from 'react-star-ratings';
import { Card, Container, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const Basket = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    return (
        <Container>
            <h2 className="mt-4">My basket: </h2>
            { user.goods.map(el => 
            <Card style={{width: '250px', cursor: 'pointer'}} className="mt-4 mb-4" onClick={() => history.push(DEVICE_ROUTE + '/' + el.id)}>
                <Image width={'100%'} height={'auto'} src={process.env.REACT_APP_API_URL + el.img}>
                    </Image>
                <Card.Body>
                <Card.Title>{el.brand?.name}</Card.Title>
                <Card.Text>
                    {el.name}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                
                    <StarRatings
                        rating={el.rating}
                        starRatedColor="blue"
                        numberOfStars={5}
                        starHoverColor={'yellow'}
                        name='rating'
                        starDimension='20px'
                        starSpacing='4px'
                    />
                </Card.Footer>
            </Card>
            )}
        </Container>
    );
});

export default Basket;