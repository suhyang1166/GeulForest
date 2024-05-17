import React, { useEffect } from "react";
import MainBtn from "../../../components/Btn/MainBtn";
import { bookAction } from "../../../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux";
import MainSlider from "./component/MainSlider";
import EditorChoice from "./component/EditorChoice";

const MainBook = () => {
  const dispatch = useDispatch();
  const { bestsellerBooks, itemNewSpecialBooks, itemEditorChoiceBooks } =
    useSelector((state) => state.book);
  console.log("eee", bestsellerBooks.item);

  useEffect(() => {
    dispatch(bookAction.getBooksApi());
  }, []);

  return (
    <div>
      <MainBtn />
      {bestsellerBooks.item && (
        <MainSlider bestseller={bestsellerBooks?.item[1]} />
      )}
      <EditorChoice />
    </div>
  );
};

export default MainBook;
