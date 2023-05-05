import { useEffect, useState } from "react";
import axios from "axios";
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
      <form className="search-box" onSubmit={handleSubmit}>
        <label className="search-label" htmlFor="search">
          {" "}
          →{" "}
        </label>{" "}
        <br />
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      <div className="FlysNews">
        <div className="FlysHome">
          {apiData
            ? apiData
                .filter((vaiseau) =>
                  vaiseau.destination.toLowerCase().includes(result)
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
    </>
  );
}

export default Cards;
