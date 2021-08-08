import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from 'react-bootstrap';

export const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ListGroup className="mb-4">
            {device.types.map((type) => <ListGroup.Item key={type.id}
            style={{cursor: 'pointer'}}
            active={type.id === device.selectedType.id}
            onClick={() => device.selectedType.id === type.id ? device.setSelectedType({}) : device.setSelectedType(type)}
            >{type.name}</ListGroup.Item>)}
        </ListGroup>
    );
});