import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const BlogPost = () => {
  const [post, setPost] = useState([]);
  let params = useParams();
  let postId = params.id;
  const postId2 = postId.replace(':', '');

  useEffect(() => {
    fetch('https://graphql.datocms.com/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`
      },
      body: JSON.stringify({
        query: `{article(filter: { id: { eq: "${postId2}" } }) {
            title
            paragraph
            image {
                url
            }
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
  }, [postId2]);

  const {
    title,
    paragraph,
    image: { url }
  } = post;

  return (
    // <Wrapper>
    //   <WidthWrapper>
    <div>
      <img src={url} alt="" />
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>

    //   </WidthWrapper>
    // </Wrapper>
  );
};
