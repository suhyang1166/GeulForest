import React, { useEffect } from "react";
import MainBtn from "../../../components/Btn/MainBtn";
import { bookAction } from "../../../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux";
import MainSlider from "./component/MainSlider";
import EditorChoice from "./component/EditorChoice";
import NewBooks from "./component/NewBooks";
import BestSeller from "./component/BestSeller";

const MainBook = () => {
  const dispatch = useDispatch();
  const { bestsellerBooks, itemNewSpecialBooks, itemEditorChoiceBooks } =
    useSelector((state) => state.book);

  useEffect(() => {
    dispatch(bookAction.getBooksApi());
  }, []);

  return (
    <div>
      <MainBtn />
      {bestsellerBooks.item && (
        <MainSlider bestseller={bestsellerBooks?.item[0]} />
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
