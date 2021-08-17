import { Carousel } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { Context } from "../index";
import { useContext } from "react";

export const Slider = observer(() => {
    const {device} = useContext(Context);
    //console.log({...device.devices[0]?.brand}?.name);

    return (
        <Carousel className="carousel-dark" style={{height: '450px', minHeight: 300}} nextLabel="" prevLabel="" >
            {device.devicesForSlider.map(i =>
                <Carousel.Item style={{height:'450px', minHeight:300}} key={i.id}>
                    <img
                        className="d-block w-100 img"
                        src={process.env.REACT_APP_API_URL + i.img}
                        alt={i.name}
                    />
                    <Carousel.Caption>
                        <h3>{i.brand?.name + ' ' + i.name}</h3>
                        <p>{"description"}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
});

