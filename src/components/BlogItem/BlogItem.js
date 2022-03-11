import React from 'react';
import { ImageBlog, Description, Title, Paragraph, Wrapper, Button } from './BlogItem.styles';

export const BlogItem = ({ title, paragraph, url }) => {
  return (
    <Wrapper>
      <ImageBlog src={url} alt={url} />
      <Description>
        <Title>{title.slice(0, 25)}</Title>
        <Paragraph>{paragraph.slice(0, 100)}...</Paragraph>
        <Button>Read more</Button>
      </Description>
    </Wrapper>
  );
};
