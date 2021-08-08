import { Carousel } from "react-bootstrap";
import { sliderItems } from "./SliderItems";



export const Slider = () => {
    
    return (
        <Carousel className="carousel-dark" style={{height:'450px', minHeight:300}} nextLabel="" prevLabel="" >
            {sliderItems.map(i =>
                <Carousel.Item style={{height:'450px', minHeight:300}}>
                <img
                    className="d-block w-100 img"
                    src={i.img}
                    alt={i.name}
                />
                <Carousel.Caption>
                    <h3>{i.name}</h3>
                    <p>{i.desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
        /*<Carousel style={{height:'450px', minHeight:300}}>
            <Carousel.Item style={{height:'450px', minHeight:300}}>
                <img
                    className="d-block w-100 img"
                    src={Samsung}
                    alt="Samsung Galaxy S21"
                />
                <Carousel.Caption>
                    <h3>Samsung Galaxy S21</h3>
                    <p>Лучшая камера среди претендентов.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:'450px', minHeight:300}}>
                <img
                    className="d-block w-100"
                    src="https://ilounge.ua/files/articles/review-iphone-12-pro-max--samyj-interesnyj-smartfon-i-vybrat-ego-stoit-tolko-radi-kamery-1.jpg"
                    alt="Apple iPhone 12"
 
                />

                <Carousel.Caption>
                    <h3>Apple iPhone 12</h3>
                    <p>Отличнейшая система.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:'450px', minHeight:300}}>
                <img
                    className="d-block w-100"
                    src="https://static.vodafone.ua/blog/01._Mi_11_1_.jpg"
                    alt="Xiaomi Mi 11 Ultra"
                />

                <Carousel.Caption>
                    <h3>Xiaomi Mi 11 Ultra</h3>
                    <p>Бюджетный монстр.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>*/
    );
}

