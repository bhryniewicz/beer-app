import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const BlogPost = () => {
  const [post, setPost] = useState([]);
  let params = useParams();

  let postId = params.id;

  useEffect(() => {
    setTimeout(() => {
      fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
        },
        body: JSON.stringify({
          query: `{article(filter: { id: { eq: "115302535" } }) {
            title
            paragraph
          }
        }`
        })
      })
        .then(res => res.json())
        .then(({ data: { article } }) => {
          setPost(article);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  }, []);

  const { title, paragraph } = post;
  return (
    <div style={{ paddingTop: '120px' }}>
      <h1>BlogPost {params.id}</h1>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
