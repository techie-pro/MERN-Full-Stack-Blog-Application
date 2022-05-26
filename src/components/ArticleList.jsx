import React from 'react';
import { Link } from 'react-router-dom';

export const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article, key) => {
        return (
          <Link
            className='article-list-item'
            to={`/article/${article.name}`}
            key={key}>
            <h3>{article.name}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        );
      })}
    </>
  );
};
