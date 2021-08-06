import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from '../assets/star.png';
import { useParams } from 'react-router-dom';
import { fetchOneDevice, sendDeviceRating } from "../http/deviceAPI";
import StarRatings from 'react-star-ratings';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Comments } from '../components/Comments';

const DevicePage = observer(() => {
    /*
    const device = {id: 5, name: 'Fridge 5', raiting: 6, img: 'https://www.birite.com.au/wp-content/uploads/Teco-TFF210WNTBM-210L-Top-Mount-White-Fridge-Main.jpg'};
    const description = [{}, {}]
    */
    let context = useContext(Context);
    let [device, setDevice] = useState({info: [], img: 'test'});
    const params = useParams();
    console.log(params);
    let isItLiked = context.device.likedDevice.find(el => el.id === params.id);

    useEffect(() => {
        fetchOneDevice(params.id).then(d => setDevice(d));
    }, []);

    function likeDevice(rating) {
        context.device.setLikedDevice({id: params.id, rating: rating});
        sendDeviceRating({id: params.id, rating: rating});
    }

    return (
        <Container className={'mt-3'}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}>
                    </Image>
                </Col>
                <Col md={4} className="flex flex-column align-items-center">
                    <Row>
                        <h2>{device.name}</h2>
                        
                        <StarRatings
                            rating={isItLiked ? isItLiked.rating : device.rating}
                            starRatedColor="blue"
                            numberOfStars={5}
                            changeRating={(rating) => likeDevice(rating)}
                            starHoverColor={'yellow'}
                            name='rating'
                        />
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height: 300, fontSize: 32}}>
                        <h3>{device.price}</h3>
                        <Button variant="outline-dark">Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                {device.info.map(d => 
                    <Row key={d.id}>
                        {d.title} : {d.description}
                    </Row>
                )}
            </Row>
            <Row className="d-flex flex-column m-3">
                <Comments deviceId={ params.id }>
                </Comments>
            </Row>
        </Container>
    );
});

export default DevicePage;