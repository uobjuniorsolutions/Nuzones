import React, {useState, useEffect} from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import InstagramMedia from "./InstagramMedia";

import "./Instagram.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = () => {

  const [mediaIDList, setMediaIDList] = useState([]);
  const nuzonesUserId = 6538547276155754;
  const accessToken = "IGQVJVa1hNcUdGakxZASEgtYk9sdU5KR3lrbWVCbVVEOEhjdGlVLThlYXpLNGpfQ2RzVGdCcWxXREtULTZAiUnpqRjhOV1l2cjAtYnBvU1pWVjFNRXJQdk9JMTB4TVdab1owUHUyRC0yb21KWU05VGZAsawZDZD";

  const getMediaIDList = async () => {
    try {
      let response = await fetch(`https://graph.instagram.com/v11.0/${nuzonesUserId}/media?access_token=${accessToken}`)
      let data = await response.json()
      setMediaIDList(data.data.slice(0,10));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMediaIDList();
  }, []);

  return (
    <div className="slide-container swiper">
      <Swiper
        style={{
          margin: "30px 50px",
          overflow: "hidden",
          borderRadius: "25px",
        }}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        pagination={{ el: ".swiper-pagination", clickable: true, dynamicBullets: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          830: { slidesPerView: 2 },
          1150: { slidesPerView: 3 }
        }}
      >
        {mediaIDList.map((media, index) => (
          <SwiperSlide key={index}>
            <InstagramMedia accessToken={accessToken} mediaID={media.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CardSlider;