import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  WidthWrapper,
  PostImage,
  PostTitle,
  PostParagraph,
  Wrap,
  DatePad
} from './BlogPost.styles';
import { FormattedDate } from 'react-intl';
import { AiFillCalendar } from 'react-icons/ai';
import { WatchToo } from 'components/WatchToo/WatchToo';
import { Scroll } from 'components/Scroll/Scroll';
import axios from 'axios';

export const BlogPost = () => {
  const [post, setPost] = useState({});
  let params = useParams();
  let postId = params.id;
  const postId2 = postId.replace(':', '');

  const { title, paragraph, description } = post;

  const queryData = {
    query: `{article(filter: { id: { eq: "${postId2}" } }) {
            id  
            title
            paragraph
            image {
                url
            }
            _createdAt
            description
          }
        }`
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
    }
  };

  const fetchPostAx = async () => {
    const response = await axios.post(process.env.REACT_APP_CMS_LINK, queryData, config);
    const data = response.data.data.article;

    setPost(data);
  };

  useEffect(() => {
    fetchPostAx();
  }, [postId2]);

  const calendarStyle = {
    color: '#03544B',
    fontSize: '14px',
    marginBottom: '1.5px'
  };

  return (
    <Wrapper>
      <WidthWrapper>
        <Scroll />
        <PostTitle>{title}</PostTitle>
        <PostParagraph>{paragraph}</PostParagraph>
        <PostImage src={post?.image?.url} alt="123" />
        <Wrap>
          <AiFillCalendar style={calendarStyle} />
          <DatePad>
            <FormattedDate
              value={post._createdAt}
              year="numeric"
              month="long"
              day="2-digit"
              hour="numeric"
              minute="numeric"
            />
          </DatePad>
        </Wrap>
        <PostParagraph isDescription>{description}</PostParagraph>
        <WatchToo id={postId2} />
      </WidthWrapper>
    </Wrapper>
  );
};
