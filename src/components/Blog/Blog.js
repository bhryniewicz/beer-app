import React, { useState, useEffect } from 'react';
import { WidthWrapper, Wrapper, BlogEntry, BlogTitle, BlogDescription, BlogPara } from './Blog.styles';
import { BlogItem } from 'components/BlogItem/BlogItem';
import { BlogList } from 'components/BlogList/BlogList';
import { Image } from 'components/ImageSection/Image';
import { Background } from 'images';

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
    fetch(CMS_LINK, {
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
        console.log(allArticles);
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
          {posts.map(({ title, paragraph, image: { url } }) => {
            return <BlogItem title={title} paragraph={paragraph} url={url} />;
          })}
        </BlogList>
      </WidthWrapper>
    </Wrapper>
  );
};
