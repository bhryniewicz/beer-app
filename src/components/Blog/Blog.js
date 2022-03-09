import React, { useState, useEffect } from 'react';
import { Wrapper } from './Blog.styles';
import axios from 'axios';

export const Blog = props => {
  const API_TOKEN = 'd9eebc5a4ba21b78859c41764c6e81';
  const CMS_LINK = 'https://graphql.datocms.com/';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios
    //   .post(CMS_LINK, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //       Authorization: `Bearer ${API_TOKEN}`
    //     },
    //     body: JSON.stringify({
    //       query: `{
    //         allArticles {
    //           title,
    //           paragraph,
    //           }
    //       }`
    //     })
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log(res.data))
    //   .catch(error => {
    //     console.log(error);
    //   });
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify({
        query: `{
                allArticles {
                  title,
                  paragraph,
                  }
              }`
      })
    })
      .then(res => res.json())
      .then(({ data: { allArticles } }) => {
        setPosts(allArticles);
        console.log(allArticles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <Wrapper>
      {posts.map(({ title, paragraph }) => {
        return (
          <div>
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};
