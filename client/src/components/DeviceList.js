import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from 'react-bootstrap';
import { DeviceItem } from './DeviceItem';

export const DeviceList = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row className="d-flex">
            {device.devices.map(d =>
                <DeviceItem key={d.id} device={d}></DeviceItem>
            )}
        </Row>
    );
});