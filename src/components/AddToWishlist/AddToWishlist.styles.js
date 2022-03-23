import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.greene};
  position: relative;
`;

export const PositionWrapper = styled.div`
  position: absolute;
  right: 17%;
  top: 20%;
  cursor: pointer;
`;

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
export const Alert = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
  animation: ${hide} 0.3s 1.7s ease-in-out, ${show} 0.3s ease-in;
`;
