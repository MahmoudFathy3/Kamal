// Import Swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";
import "./Carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from "react-redux";
import { addCart } from "../../Store/Cart/Cart";


const Carousel = ({ Products, number, space }) => {
  const dispatch = useDispatch();


  const List = Products.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div className="info-Carousel">
          <div className="Carousel-img">
            <img src={item.image} alt="" />
            <button onClick={() => dispatch(addCart(item))}>Add To Cart</button>
          </div>
          <div className="info-wapper">
            <h3>{item.title.slice(0, 40)}</h3>
              <p>{item.description}</p>
            <div className="info-price">
              <div className="price-star">
                <FontAwesomeIcon icon={faStar} color="orange" />
                <FontAwesomeIcon icon={faStar} color="orange" />
                <FontAwesomeIcon icon={faStar} color="orange" />
                <FontAwesomeIcon icon={faStar} color="orange" />
                <FontAwesomeIcon icon={faStar} color="orange" />
              </div>
              <span>${item.price}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={number}
      spaceBetween={space}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    modules={[Autoplay]}
      className="swiper"
    >
      {List}
    </Swiper>
  );
};

export default Carousel;
