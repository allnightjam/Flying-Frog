import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/MainArticles.css';

const MainArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get("http://localhost:3001/articles");
        setArticles(res.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    getArticles();
  }, []);

  return (
    <div className="main-articles-container">
    <h2 className="main-articles-title">Articles</h2>
    <Link to={`/submitarticle`}>
      <button className="main-articles-submit">Submit An Article</button>
    </Link>
    <div className="main-article-grid">
      {articles.map((article, index) => (
        <div key={article.id} className={`main-article-item ${index === 0 ? 'main-full-width' : 'home-grid-item'}`}>
          <Link to={`/article/${article.id}`} className='article-link'>
            <div className={`main-article-content ${index === 0 ? 'main-article-first' : ''}`}>
              <div className="article-image-container">
                <img src={article.header_image} alt="" className="article-image" />
              </div>
              <h2 className="article-title">{article.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
};
export default MainArticle;