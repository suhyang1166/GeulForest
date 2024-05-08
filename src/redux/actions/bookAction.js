import { api } from "../api";

const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

const getBooksApi = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "GET_BOOK_REQUEST",
            });
            const aladinApi = await api.get(
                `/api/ItemList.aspx?QueryType=Bestseller&MaxResults=30&start=1&SearchTarget=Book`
                // `ItemList.aspx`
            );
            console.log("aaa", aladinApi);
        } catch (error) {
            dispatch({
                type: "GET_BOOK_FAILURE",
            });
        }
    };
};

export const bookAction = { getBooksApi };
