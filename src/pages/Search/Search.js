import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log(e.target);
  };
  return (
    <div style={{ background: "#eee", width: "100%", height: "1200px" }}>
      <form>
        <input
          onClick={onClick}
          type="text"
          placeholder={"검색어입력"}
          style={{ width: "90%", height: "30px", marginTop: "60px" }}
        />
        <FontAwesomeIcon icon={faSearch} />
      </form>
    </div>
  );
};

export default Search;
