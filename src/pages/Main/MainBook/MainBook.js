import React from "react";
import MainBtn from "../../../components/Btn/MainBtn";
import { api } from "../../../redux/api";

const API_KEY = process.env.REACT_APP_BOOK_API_KEY;

const MainBook = () => {
    const getData = async () => {
        const aladinApi = await api.get(
            // `/test/ItemList_20131101.js`
            // `ItemList.aspx`
            // `/api/ItemList.aspx?&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&Version=20131101
            // `
            `/api/ItemList.aspx?QueryType=Bestseller&MaxResults=30&start=1&SearchTarget=Book`
        );
        console.log("bbb", aladinApi.data.item);
    };

    getData();
    return (
        <div>
            <MainBtn />
            <h1>MainBook</h1>
            <img></img>
        </div>
    );
};

export default MainBook;
