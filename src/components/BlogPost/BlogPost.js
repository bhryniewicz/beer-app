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

export const BlogPost = () => {
  const [post, setPost] = useState({});
  let params = useParams();
  let postId = params.id;
  const postId2 = postId.replace(':', '');

  const myRef = useRef(null);
  const handleScrollTop = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  //   const executeScroll = handleScrollTop(myRef);

  const { title, paragraph, description } = post;

  const fetchPost = () =>
    fetch(process.env.REACT_APP_CMS_LINK, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
      },
      body: JSON.stringify({
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
      })
    })
      .then(res => res.json())
      .then(({ data: { article } }) => {
        setPost(article);
      })
      .catch(error => {
        console.log(error);
      });

  useEffect(() => {
    fetchPost();
  }, [postId2]);

  const calendarStyle = {
    color: '#03544B',
    'font-size': '13px'
  };

  return (
    <Wrapper ref={myRef}>
      <WidthWrapper>
        <PostTitle>{title}</PostTitle>
        <PostParagraph>{paragraph}</PostParagraph>
        <PostImage src={post?.image?.url} alt="123" />
        <Wrap>
          <AiFillCalendar style={calendarStyle} />
          <DatePad>
            <FormattedDate value={post._createdAt} year="numeric" month="long" day="2-digit" />
          </DatePad>
        </Wrap>
        <PostParagraph isDescription onClick={() => handleScrollTop(myRef)}>
          {description}
        </PostParagraph>
        <WatchToo />
      </WidthWrapper>
    </Wrapper>
  );
};
