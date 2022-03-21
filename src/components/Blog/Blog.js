import React, { useState, useEffect } from 'react';
import {
  WidthWrapper,
  Wrapper,
  BlogEntry,
  BlogTitle,
  BlogDescription,
  BlogPara
} from './Blog.styles';
import { BlogItem } from 'components/BlogItem/BlogItem';
import { BlogList } from 'components/BlogList/BlogList';
import { Image } from 'components/ImageSection/Image';
import { Background } from 'images';

export const Blog = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_CMS_LINK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
      },
      body: JSON.stringify({
        query: `{
                allArticles {
                  id,
                  title,
                  paragraph,
                  image {
                      url,
                  }
                  }
              }`
      })
    })
      .then(res => res.json())
      .then(({ data: { allArticles } }) => {
        setPosts(allArticles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <WidthWrapper>
        <BlogEntry>
          <Image src={Background} height />
          <BlogDescription>
            <BlogTitle>Beer club blog 🍺</BlogTitle>
            <BlogPara>Check out our recipies and other stuff</BlogPara>
          </BlogDescription>
        </BlogEntry>

        <BlogList>
          {posts.map(({ id, title, paragraph, image: { url } }) => {
            return <BlogItem title={title} paragraph={paragraph} url={url} id={id} />;
          })}
        </BlogList>
      </WidthWrapper>
    </Wrapper>
  );
};
