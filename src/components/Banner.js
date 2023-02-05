import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <div className="container">
            <div className="container__two"/>
            <Carousel
                autoPlay
                infinteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>
                <div>
                    <img className="carousel__image" loading="lazy" src="https://links.papareact.com/gi1" alt="" />
                </div>
                <div>
                    <img className="carousel__image" loading="lazy" src="https://m.media-amazon.com/images/I/71g6saMCOEL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img className="carousel__image" loading="lazy" src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img className="carousel__image" loading="lazy" src="	https://m.media-amazon.com/images/I/51JPU2nsLSL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img className="carousel__image" loading="lazy" src="https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img className="carousel__image" loading="lazy" src="	https://m.media-amazon.com/images/I/61mZ60Ci3YL._SX3000_.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
}
export default Banner;