import React, { useRef, useState } from 'react';
import { ImageBlog, Description, Title, Paragraph, Wrapper, Button, Wrap } from './BlogItem.styles';
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

export const BlogItem = ({ id, title, paragraph, url }) => {
  const [noRender, setNoRender] = useState(false);

  return (
    <Wrapper>
      <Wrap>
        <ImageBlog
          src={url}
          alt={url}
          onLoad={() => setNoRender(true)}
          className={`smooth ${!noRender ? 'hidden' : 'visible'}`}
        />
        {noRender ? null : <Bars color="#03544B" height={80} width={80} />}
      </Wrap>
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
