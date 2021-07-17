import { Col, Container, Row } from "react-bootstrap";
import { BrandBar } from "../components/BrandBar";
import { DeviceList } from "../components/DeviceList";
import { TypeBar } from "../components/TypeBar";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList></DeviceList>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;