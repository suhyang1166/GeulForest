import { bookApi } from "../bookApi";

const getBooksApi = (itemId, key, start) => {
  return async (dispatch) => {
    dispatch({
      type: "GET_BOOK_REQUEST",
    });

    try {
      const bestsellerApi = bookApi.get(
        `/api/ItemList.aspx?QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book`
      );
      const itemNewSpecialApi = bookApi.get(
        `/api/ItemList.aspx?QueryType=ItemNewSpecial&MaxResults=30&start=1&SearchTarget=Book`
      );
      const itemEditorChoiceApi = bookApi.get(
        `/api/ItemList.aspx?QueryType=ItemEditorChoice&MaxResults=30&start=1&CategoryId=1`
      );
      const bookDetailApi = bookApi.get(
        `/api/ItemLookUp.aspx?itemIdType=itemId&ItemId=${itemId}&OptResult=usedList,cardReviewImgList,reviewList,ratingInfo,bestSellerRank`
      );
      const bookSearchApi = bookApi.get(
        `/api/ItemSearch.aspx?Query=${key}&QueryType=Keyword&MaxResults=200&start=${start}&SearchTarget=Book`
      );

      let [
        bestsellerBooks,
        itemNewSpecialBooks,
        itemEditorChoiceBooks,
        bookDetailBooks,
        bookSearchBooks,
      ] = await Promise.all([
        bestsellerApi,
        itemNewSpecialApi,
        itemEditorChoiceApi,
        bookDetailApi,
        bookSearchApi,
      ]);

      dispatch({
        type: "GET_BOOK_SUCCESS",
        payload: {
          bestsellerBooks: bestsellerBooks.data,
          itemNewSpecialBooks: itemNewSpecialBooks.data,
          itemEditorChoiceBooks: itemEditorChoiceBooks.data,
          bookDetailBooks: bookDetailBooks.data,
          bookSearchBooks: bookSearchBooks.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_BOOK_FAILURE",
        payload: error.message,
      });
    }
  };
};

export const bookAction = { getBooksApi };
