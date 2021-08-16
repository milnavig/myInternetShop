import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

export const CreateBrand = ({show, onHide}) => {
    let [value, setValue] = useState('');
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('');
            onHide();
        });
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
                    <Form.Control value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add the name of the new type"></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}