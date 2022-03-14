import React from 'react';
import { ImageBlog, Description, Title, Paragraph, Wrapper, Button } from './BlogItem.styles';
import { Link } from 'react-router-dom';

export const BlogItem = ({ id, title, paragraph, url }) => {
  return (
    <Wrapper>
      <ImageBlog src={url} alt={url} />
      <Description>
        <Title>{title.slice(0, 25)}</Title>
        <Paragraph>{paragraph.slice(0, 100)}...</Paragraph>

        <Button>
          <Link to={`/blog:${id}`} key={id}>
            Read more
          </Link>
        </Button>
      </Description>
    </Wrapper>
  );
};
