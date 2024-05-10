import { bookApi } from "../bookApi";

const getBooksApi = () => {
    return async (dispatch) => {
        dispatch({
            type: "GET_BOOK_REQUEST",
        });

        try {
            const bestsellerApi = bookApi.get(
                `/api/ItemList.aspx?QueryType=Bestseller&MaxResults=30&start=1&SearchTarget=Book`
            );
            const itemNewSpecialApi = bookApi.get(
                `/api/ItemList.aspx?QueryType=ItemNewSpecial&MaxResults=30&start=1&SearchTarget=Book`
            );
            const itemEditorChoiceApi = bookApi.get(
                `/api/ItemList.aspx?QueryType=ItemEditorChoice&MaxResults=30&start=1&CategoryId=1`
            );

            let [bestsellerBooks, itemNewSpecialBooks, itemEditorChoiceBooks] =
                await Promise.all([
                    bestsellerApi,
                    itemNewSpecialApi,
                    itemEditorChoiceApi,
                ]);

            dispatch({
                type: "GET_BOOK_SUCCESS",
                payload: {
                    bestsellerBooks: bestsellerBooks.data,
                    itemNewSpecialBooks: itemNewSpecialBooks.data,
                    itemEditorChoiceBooks: itemEditorChoiceBooks.data,
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
