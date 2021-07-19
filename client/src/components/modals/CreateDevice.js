import { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';

export const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    let [name, setName] = useState('');
    let [price, setPrice] = useState(0);
    let [file, setFile] = useState(null);
    let [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then((t) => device.setTypes(t));
        fetchBrands().then((t) => device.setBrands(t));
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    }

    const selectFile = e => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', String(price));
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(res => onHide());
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
                            {device.selectedType.name || 'Select type'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => 
                            <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
                                {type.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>
                            {device.selectedBrand.name || 'Select brand'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => 
                            <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
                                {brand.name}
                            </Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control placeholder="Enter the name of device" className="mt-3" value={name} onChange={e => setName(e.target.value)}>
                    </Form.Control>
                    <Form.Control placeholder="Enter the price of device" type='number' className="mt-3" value={price} onChange={e => setPrice(Number(e.target.value))}>
                    </Form.Control>
                    <Form.Control type='file' className="mt-3" onChange={selectFile}>
                    </Form.Control>
                    <hr />
                    <Button onClick={addInfo}>Add a new property</Button>
                    {info.map(i => 
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder="Enter a name of the property" value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}>
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder="Enter a description of the property" value={i.description} 
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}>
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
                <Button variant={"outline-success"} onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});