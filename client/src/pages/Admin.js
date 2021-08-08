import { Button, Container } from "react-bootstrap";
import { CreateBrand } from "../components/modals/CreateBrand";
import { CreateType } from "../components/modals/CreateType";
import { CreateDevice } from "../components/modals/CreateDevice";
import { useState } from "react";

const Admin = () => {
    let [brandVisible, setBrandVisible] = useState(false);
    let [typeVisible, setTypeVisible] = useState(false);
    let [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container className="d-flex flex-column mt-4 mb-4">
            <Button variant={'outline-dark'} onClick={() => setTypeVisible(true)} className="mt-2">
                Add type
            </Button>
            <Button variant={'outline-dark'} onClick={() => setBrandVisible(true)} className="mt-2">
                Add brand
            </Button>
            <Button variant={'outline-dark'} onClick={() => setDeviceVisible(true)} className="mt-2">
                Add device
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}></CreateBrand>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}></CreateType>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}></CreateDevice>
        </Container>
    );
}

export default Admin;