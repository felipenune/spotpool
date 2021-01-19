import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 40%;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background: #FFF;
  border: 2px solid #2ba690;
  border-radius: 1rem;

  @media (max-width: 1920px) {
    height: 60%;
  }

  @media (max-width: 1600px) {
    height: 40%;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  padding: 5px;
  color: #2ba690;
  font-size: 2rem;
  font-weight: bold;
  background: transparent;
`;

export const SearchIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 30%;
  margin-bottom: 5%;

  @media (max-width: 1600px) {
    height: 20%;
  }

  @media (max-width: 540px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
  }
`;

export const PlaylistContainer = styled.div`
  display: grid;
  margin-top: -2%;
  margin-bottom: 5%;
  width: 90%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 80px 50px;
  list-style: none;

  &.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    height: 300px;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    width: 60%;
  }
`;

export const ClearFiltersButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 80%;
  border: none;
  border-radius: 1rem;
  padding: 5px;
  background: #000;
  color: #FFF;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.3s;

  &:hover{
    cursor: pointer;
    color: #2ba690;
    border: 1px solid #2ba690;
    background: #FFF;
  }

  @media (max-width: 540px) {
    height: 20%;
    width: 40%;
  }
`;

export const UpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  text-decoration: none;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  border-radius: 50%;
  border: 2px solid #2ba690;
  color: #2ba690;
  background: transparent;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: #2ba690;
    color: #314669;
  }
`;
