import { observer } from "mobx-react-lite";
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import StarRatings from 'react-star-ratings';

export const DeviceItem = observer(({device}) => {
    const history = useHistory();
    return (
        <Col md={3} className="mt-3" className="d-flex ">
            
            <Card style={{width: '300px', cursor: 'pointer'}} className="mt-4 mb-4" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Image width={'100%'} height={'180px'} src={process.env.REACT_APP_API_URL + device.img}>
                </Image>
                <Card.Body>
                <Card.Title>{device.brand?.name}</Card.Title>
                <Card.Text>
                    {device.name}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                
                    <StarRatings
                        rating={device.rating}
                        starRatedColor="blue"
                        numberOfStars={5}
                        starHoverColor={'yellow'}
                        name='rating'
                        starDimension='20px'
                        starSpacing='4px'
                    />
                </Card.Footer>
            </Card>
        </Col>
    );
});