import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Card from "../components/Compteurcard/Card";
import Article from "../components/Articles/Article";
import "./Home_FlyNews.scss";

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
    axios.get("http://localhost:5001/fly").then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5001/articles")
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
      <div className="FlysNews">
        <div className="FlysHome">
          {apiData
            ? apiData
                .filter((vaiseau) =>
                  vaiseau.name.toLowerCase().includes(result)
                )
                .map((launchSelected) => (
                  <Card key={launchSelected.id} data={launchSelected} />
                ))
            : ""}
        </div>
        <div className="ArticlesHome">
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
        </div>
      </div>
      <NavLink to="Payment-form">Go to Payment</NavLink>
    </>
  );
}

export default Cards;
