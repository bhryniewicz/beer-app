import React, { useEffect, useState } from 'react';
import { BlogList } from 'components/BlogList/BlogList';
import { Wrapper, Title } from './WatchToo.styles';
import { BlogItem } from 'components/BlogItem/BlogItem';
import axios from 'axios';

export const WatchToo = ({ id }) => {
  const [posts, setPosts] = useState([]);

  const queryData = {
    query: `{
        allArticles(first: 3, filter: {id: {notIn: ${id}}}) {
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
  };

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
    }
  };

  const fetchPosts = async () => {
    const response = await axios.post(process.env.REACT_APP_CMS_LINK, queryData, config);
    const data = response.data.data.allArticles;

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  return (
    <Wrapper>
      <Title>See other posts too</Title>
      <BlogList>
        {posts.map(({ title, paragraph, image: { url }, id }) => {
          return <BlogItem title={title} paragraph={paragraph} url={url} id={id} key={id} />;
        })}
      </BlogList>
    </Wrapper>
  );
};
