import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from 'react-bootstrap';

export const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ListGroup horizontal>
            {device.brands.map(brand =>
                <ListGroup.Item key={brand.id} onClick={() => device.selectedBrand.id === brand.id ? device.setSelectedBrand({}) : device.setSelectedBrand(brand)}
                active={device.selectedBrand.id === brand.id}
                >{brand.name}</ListGroup.Item>
            )}
        </ListGroup>
    );
});