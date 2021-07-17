import { useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';

export const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    let [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add a new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            Select type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => 
                            <Dropdown.Item key={type.id}>
                                {type.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            Select brand
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => 
                            <Dropdown.Item key={brand.id}>
                                {brand.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control placeholder="Enter the name of device" className="mt-3">
                    </Form.Control>
                    <Form.Control placeholder="Enter the price of device" type='number' className="mt-3">
                    </Form.Control>
                    <Form.Control type='file' className="mt-3">
                    </Form.Control>
                    <hr />
                    <Button onClick={addInfo}>Add a new property</Button>
                    {info.map(i => 
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder="Enter a name of the property">
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder="Enter a description of the property">
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}