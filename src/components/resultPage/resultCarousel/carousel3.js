import React from 'react'
import css from "./carousel3.module.scss";
import { useSelector } from 'react-redux';
import ArrowRight from '../../shared/icons/iconsSlider/R.png';
import ArrowLeft from '../../shared/icons/iconsSlider/L.png';
import Slider from "react-slick";



  const ArrowL = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowLeft}
        className={className}
        style={{ ...style, 
          width: '50px', 
          height: '50px', 
          marginLeft: '-30px',
        }}
        onClick={onClick}
        alt="Previous"
      />
    );
  }
  const ArrowR = (props) => {
    const { className, style, onClick } = props;
    return (
      <img 
        src={ArrowRight}
        className={className}
        style={{ ...style,
          width: '50px', 
          height: '50px', 
          marginRight: '-50px',
        }}
        onClick={onClick}
        alt="Next"
      />
    );
  }

  export const Carousel3 = () => {  
  const newWidth = useSelector(state => state.app.width);
  const slidesToShow = newWidth < 1100 ? 1 : 8;
  const summary = useSelector(state => state.histograms.histogramInfo);
 
  const settings = {
      slidesToScroll: 8,
      slidesToShow: slidesToShow,
      className: "center",
      infinite: false,
      centerPadding: "60px",
      swipeToSlide: true,
      nextArrow: <ArrowR />,
      prevArrow: <ArrowL />,  
  };

  const Period = ({date, risk, total, ...rest}) => {
    const dateObj = new Date(date)
    const customDate =`${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`
    return (
    <div {...rest}>
      <div className={css.item}>{customDate}</div>
      <div className={css.item}>{total}</div>
      <div className={css.item}>{risk}</div>
    </div>
    )
  }

  return (
    <div className={css.block} >
      <div className={css.sections}>
        <section>Период</section>
        <section>Всего</section>
        <section>Риски</section>

        
      </div>
      
      <div className={css.sliderWrapper}>
       <Slider {...settings}> 
          {summary && summary.map((period, ind)=>
          
            <Period
              key={ind}
              className={css.periodI}
              date={period.date}
              total={period.total}
              risk={period.risk}
            />
          )}
        </Slider> 
      </div>         
    </div>
)
}

