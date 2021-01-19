import styled from 'styled-components';

export const SelectStyled = styled.select`
  width: 20%;
  height: 80%;
  border: none;
  border-radius: 1rem;
  padding: 5px;
  color: #2ba690;
  font-size: 2rem;
  font-weight: bold;

  &:hover{
    cursor: pointer;
  }

  @media (max-width: 540px) {
    height: 20%;
    width: 40%;
  }
`;
