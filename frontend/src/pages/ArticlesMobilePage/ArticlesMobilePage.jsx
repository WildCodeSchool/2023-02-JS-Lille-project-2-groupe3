import "./ArticlesMobilePage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "../../components/Articles/Article";

function ArticleMobilePage() {
  const [listArticle, setListArticle] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((res) => setListArticle(res.data));
  }, []);
  return (
    <div className="ArticlesMobilePage">
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
  );
}

export default ArticleMobilePage;
