import styled, { keyframes } from 'styled-components';

const hide = keyframes`
    from {
        opacity: 1;
    }    
    to {
        opacity: 0;
    }
`;

const show = keyframes`
       from {
        opacity: 0;
    }    
    to {
        opacity: 1;
    }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 8%;
  right: 15%;
  width: fit-content;
  padding: 0 15px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.greene};
  color: ${({ theme }) => theme.colors.sunflower};
  animation: ${hide} 0.3s 1.7s ease-in-out, ${show} 0.3s ease-in;

  @media ${({ theme }) => theme.breakpoints.mobileL} {
    right: 50%;
    transform: translateX(50%);
  }
`;
