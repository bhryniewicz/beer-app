import React, { useState, useEffect } from 'react';
import {
  WidthWrapper,
  Wrapper,
  BlogEntry,
  BlogTitle,
  BlogDescription,
  BlogPara,
  LoadMore
} from './Blog.styles';
import { BlogItem } from 'components/BlogItem/BlogItem';
import { BlogList } from 'components/BlogList/BlogList';
import { Image } from 'components/ImageSection/Image';
import { Background } from 'images';
import { Loading } from 'components/BeerList/BeerList.styles';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';

export const Blog = props => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
    }
  };

  const queryData = {
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
  };

  const fetchPosts = async () => {
    const response = await axios.post(process.env.REACT_APP_CMS_LINK, queryData, config);
    const data = response.data.data.allArticles;
    setPosts(data);
    setLoading(false);
  };

  const [limit, setLimit] = useState(6);
  const list = posts.slice(0, limit);

  useEffect(() => {
    fetchPosts();
  }, [limit]);

  const loadMore = () => {
    setLimit(limit + 6);
  };

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
          {loading ? (
            <Loading isBiggerGrid>
              Loading <Bars color="black" height={30} width={30} />
            </Loading>
          ) : (
            list.map(({ id, title, paragraph, image: { url } }) => {
              return <BlogItem title={title} paragraph={paragraph} url={url} id={id} key={id} />;
            })
          )}
        </BlogList>
        {limit >= posts?.length ? null : <LoadMore onClick={loadMore}>load more</LoadMore>}
      </WidthWrapper>
    </Wrapper>
  );
};
