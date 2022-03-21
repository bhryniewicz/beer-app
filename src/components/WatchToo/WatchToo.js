import React, { useEffect, useState } from 'react';
import { BlogList } from 'components/BlogList/BlogList';
import { Wrapper, Title } from './WatchToo.styles';
import { BlogItem } from 'components/BlogItem/BlogItem';

export const WatchToo = () => {
  const [posts, setPosts] = useState([]);
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
  //     }
  //   };

  //   const data = `"{
  //     allArticles(first: 3) {
  //         id
  //         title
  //         paragraph
  //         _createdAt
  //         _firstPublishedAt
  //         createdAt

  //       }
  //   }"`;

  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.post(process.env.REACT_APP_CMS_LINK, data, config);
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const fetchPosts = () => {
    fetch(process.env.REACT_APP_CMS_LINK, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
      },
      body: JSON.stringify({
        query: `{
        allArticles(first: 3) {
            id
            title
            paragraph
            _createdAt
            _firstPublishedAt
            createdAt
            image {
                url
            }
          }
      }`
      })
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.allArticles);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Wrapper>
      <Title>See other posts too</Title>
      <BlogList>
        {posts.map(({ title, paragraph, image: { url }, id }) => {
          return <BlogItem title={title} paragraph={paragraph} url={url} id={id} />;
        })}
      </BlogList>
    </Wrapper>
  );
};
