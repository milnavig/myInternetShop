import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Col, Image, Row } from 'react-bootstrap';
import star from '../assets/star.png'
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

export const DeviceItem = observer(({device}) => {
    const history = useHistory();
    return (
        <Col md={3} className="mt-3">
            <Card style={{width: '150px', cursor: 'pointer'}} border={'light'} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}></Image>
                <div className=" text-black-50 d-flex justify-content-between align-items-center mt-1">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center">
                        <div>
                            {device.raiting}
                        </div>
                        <Image src={star} width={20} height={20}></Image>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
                
            </Card>
        </Col>
    );
});