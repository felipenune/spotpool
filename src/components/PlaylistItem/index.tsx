import React, { AnchorHTMLAttributes } from 'react';
import { FaMusic } from 'react-icons/fa';
import {
  Container, InfoContainer, PosterBackground, Tracks, TrackDiv, Title,
} from './styles';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  rate: number;
  url: string;
  poster: string;
}

const PlaylistItem: React.FC<Props> = ({
  title,
  rate,
  url,
  poster,
  ...rest
}: Props) => (
  <Container
    {...rest}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <PosterBackground style={{ backgroundImage: `url(${poster})` }} />

    <InfoContainer>
      <Title>{title.toUpperCase()}</Title>

      <TrackDiv>
        <FaMusic size="3rem" color="#1CCF5B" />

        <Tracks>
          {rate}
          {' '}
          tracks
        </Tracks>
      </TrackDiv>
    </InfoContainer>
  </Container>
);

export default PlaylistItem;
