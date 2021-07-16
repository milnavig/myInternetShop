import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from 'react-bootstrap';

export const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
            <Card key={brand.id} className="p-2"
            onClick={() => device.setSelectedBrand(brand)}
            border={device.selectedBrand.id === brand.id ? 'danger' : 'light'}
            style={{cursor: 'pointer'}}>
                {brand.name}
            </Card>
            )}
        </Row>
    );
});