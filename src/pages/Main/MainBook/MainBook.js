import React from "react";
import MainBtn from "../../../components/Btn/MainBtn";
import { useSelector } from "react-redux";
import MainSlider from "./component/MainSlider";
import EditorChoice from "./component/EditorChoice";
import NewBooks from "./component/NewBooks";
import BestSeller from "./component/BestSeller";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./component/swiper.css";

const MainBook = () => {
  const { bestsellerBooks, itemNewSpecialBooks, itemEditorChoiceBooks } =
    useSelector((state) => state.book);

  return (
    <div>
      <MainBtn />
      {bestsellerBooks?.item && (
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {bestsellerBooks?.item?.slice(0, 3).map((book, index) => (
            <SwiperSlide key={index}>
              <MainSlider bestseller={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {itemEditorChoiceBooks?.item && (
        <EditorChoice itemEditorChoiceBooks={itemEditorChoiceBooks.item} />
      )}
      {itemNewSpecialBooks?.item && (
        <NewBooks itemNewSpecialBooks={itemNewSpecialBooks.item} />
      )}
      {bestsellerBooks?.item && (
        <BestSeller bestseller={bestsellerBooks?.item} />
      )}
    </div>
  );
};

export default MainBook;
