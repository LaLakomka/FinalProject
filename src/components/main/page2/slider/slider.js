import React from "react";
import css from "./slider.module.scss";
import ArrowLeft from "../../../shared/icons/iconsSlider/L.png";
import ArrowRight from "../../../shared/icons/iconsSlider/R.png";
import Castle from "../../../shared/icons/iconsSlider/castle.svg";
import Magnifier from "../../../shared/icons/iconsSlider/magnifier.svg";
import Watch from "../../../shared/icons/iconsSlider/watch.svg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

  const ArrowL = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowLeft}
        className={className}
        style={{ ...style, 
          width: '50px', 
          height: '50px', 
          marginLeft: '-30px' 
        }}
        onClick={onClick}
        alt="Previous"
      />
    );
  };    
  const ArrowR = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowRight}
        className={className}
        style={{ ...style, 
          width: '50px', 
          height: '50px', 
          marginRight: '-30px' 
        }}
        onClick={onClick}
        alt="Next"
      />
    );
  };
export const Carousel1 = () => {
  const newWidth = useSelector(state => state.app.width);
  const slidesToShow = newWidth < 1100 ? 1 : 3;
  
  const settings = {
    slidesToScroll: 1,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    nextArrow: <ArrowR />,
    prevArrow: <ArrowL />,  
  };
  return (
    <div>
      <div className={css.slider}>
        <Slider {...settings}>
          <div>
            <div className={css.card}>
              <img className={css.cardImg} src={Watch} alt='Watch' />
              <section className={css.section}>
                Высокая и оперативная скорость обработки заявки
              </section>
            </div>
          </div>
          <div>
            <div className={css.card}>
              <img className={css.cardImg} src={Magnifier} alt='Magnifier' />
              <section className={css.section}>
                Огромная комплексная база данных, обеспечивающая объективный ответ на запрос
              </section>
            </div>
          </div>
          <div>
            <div className={css.card}>
              <img className={css.cardImg} src={Castle} alt='Castle' />
              <section className={css.section}>
                Защита конфеденциальных сведений, не подлежащих разглашению 
                по федеральному законодательству
              </section>
            </div>
          </div>
          <div>
            <div className={css.card}>
              <img className={css.cardImg} src={Magnifier} alt='Magnifier' />
              <section className={css.section}>
                Высокая и оперативная скорость обработки заявки
              </section>
            </div>
          </div>         
        </Slider>
      </div>
    </div>
  );
}

