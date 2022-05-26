import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from '../article-content';
import { ArticleList } from '../components/ArticleList';

export const ArticlePage = () => {
  const { name } = useParams();
  // console.log(name);

  const article = articleContent.find((item) => {
    return item.name === name;
  });

  const otherArticles = articleContent.filter((article) => {
    return article.name !== name;
  });
  if (!article) return <h1> Article doesnt exist</h1>;

  return (
    <div>
      <h1>Welcome to {article.name}</h1>
      <p>{article.content}</p>
      <ArticleList articles={otherArticles} />
    </div>
  );
};

