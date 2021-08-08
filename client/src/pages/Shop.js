import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "../index";
import { BrandBar } from "../components/BrandBar";
import { DeviceList } from "../components/DeviceList";
import { TypeBar } from "../components/TypeBar";
import { Slider } from "../components/Slider";
import { fetchTypes, fetchBrands, fetchDevices } from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    let {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then((t) => device.setTypes(t));
        fetchBrands().then((t) => device.setBrands(t));
        fetchDevices(null, null, 1, 3).then((t) => {
            device.setDevices(t.rows);
            device.setTotalCount(t.count);
        });
    }, []);

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then((t) => {
            device.setDevices(t.rows);
            device.setTotalCount(t.count);
        });
    }, [device.page, device.selectedType, device.selectedBrand]);

    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-center mt-3">
                <Col md={8}>
                    <Slider></Slider>
                </Col>
            </Row>            
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList></DeviceList>
                    <Pages></Pages>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;