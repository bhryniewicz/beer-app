import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const WidthWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 140px 0 60px;
`;

const marginDown = css`
  margin-bottom: 30px;
`;

export const Wrap = styled.div`
  ${marginDown}
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const PostTitle = styled.h1`
  ${marginDown}
  color: ${({ theme }) => theme.lightenColors.green};
  font-size: 30px;
`;

export const PostParagraph = styled.p`
  ${marginDown}
  font-size: 14px;
  line-height: ${({ isDescription }) => (isDescription ? '180%' : '140%')};
`;

//kalendarz padding

export const DatePad = styled.p`
  padding-left: 5px;
  font-size: 12px;

  
`;
