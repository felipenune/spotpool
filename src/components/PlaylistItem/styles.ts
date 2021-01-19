import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 20px;
  border-radius: 3rem;
  background: #181818;
  text-decoration: none;
  border: none;
  z-index: 1;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: #3b3b3b;
  }
`;

export const PosterBackground = styled.div`
  height: 70%;
  width: 100%;
  border-radius: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 5%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  height: 30%;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #fff;
  text-align: left;
`;

export const TrackDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Tracks = styled.p`
  font-size: 2.2rem;
  color: #fff;
  margin-left: 6%;
`;
