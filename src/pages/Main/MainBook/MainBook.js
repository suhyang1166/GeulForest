import React, { useEffect } from "react";
import MainBtn from "../../../components/Btn/MainBtn";
import { bookAction } from "../../../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux";
import MainSlider from "./component/MainSlider";
import EditorChoice from "./component/EditorChoice";
import NewBooks from "./component/NewBooks";
import BestSeller from "./component/BestSeller";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./component/swiper.css";

const MainBook = () => {
  const dispatch = useDispatch();
  const { bestsellerBooks, itemNewSpecialBooks, itemEditorChoiceBooks } =
    useSelector((state) => state.book);

  useEffect(() => {
    dispatch(bookAction.getBooksApi());
  }, [dispatch]);

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
      {itemEditorChoiceBooks.item && (
        <EditorChoice itemEditorChoiceBooks={itemEditorChoiceBooks.item} />
      )}
      {itemNewSpecialBooks.item && (
        <NewBooks itemNewSpecialBooks={itemNewSpecialBooks.item} />
      )}
      {bestsellerBooks.item && (
        <BestSeller bestseller={bestsellerBooks?.item} />
      )}
    </div>
  );
};

export default MainBook;
