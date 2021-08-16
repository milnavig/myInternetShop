import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

export const CreateType = ({show, onHide}) => {
    let [value, setValue] = useState('');
    const addType = () => {
        createType({name: value}).then(data => {
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
                <Button variant={"outline-success"} onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}