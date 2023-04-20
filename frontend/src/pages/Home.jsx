import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Card from "../components/Compteurcard/Card";
import Article from "../components/Articles/Article";

function Cards() {
  const [apiData, setData] = useState();
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [listArticle, setListArticle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(userInput.toLowerCase());
    setUserInput("");
  };

  useEffect(() => {
    axios.get("http://localhost:5000/fly").then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((res) => setListArticle(res.data));
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <label htmlFor="search"> Rechercher </label> <br />
        <input
          type="text"
          name="search"
          id="search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      {apiData
        ? apiData
            .filter((vaiseau) => vaiseau.name.toLowerCase().includes(result))
            .map((launchSelected) => (
              <Card key={launchSelected.id} data={launchSelected} />
            ))
        : ""}

      {listArticle &&
        listArticle.map((actu) => (
          <Article
            key={actu.title}
            title={actu.title}
            link={actu.link}
            date={actu.date}
            image={actu.image}
          />
        ))}
      <NavLink to="Payment-form">Go to Payment</NavLink>
    </>
  );
}

export default Cards;
