import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
  
    @media (max-width: 768px) {
      height: auto;
      padding: 2rem;
    }
`;
