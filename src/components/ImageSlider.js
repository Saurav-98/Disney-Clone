import React from "react";

import Slider from "react-slick";

import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;

const Carousel = styled(Slider)`
  padding-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  button {
    z-index: 1;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 0.4rem;

    box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.65),
      0px 16px 10px -10px rgba(0, 0, 0, 0.73);
    -webkit-box-shadow: 5px 26px 30px -10px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 5px 26px 30px -10px rgba(0, 0, 0, 0.71);

    transition: all 0.3s ease-in;

    &:hover {
      border-color: White;
    }
  }
`;
