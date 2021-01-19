import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowUp, FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'react-lottie';
import loader from '../../assets/loader_white.json';
import Header from '../../components/Header';
import PlaylistItem from '../../components/PlaylistItem';
import Select from '../../components/Select';
import Warning from '../../components/Warning';
import Alert from '../../components/Alert';
import { useFilters } from '../../hooks/useFilters';
import api from '../../services/api';
import {
  FiltersContainer,
  Container,
  Input,
  InputDiv,
  PlaylistContainer,
  SearchContainer,
  SearchIconDiv,
  UpButton,
  ClearFiltersButton,
} from './styles';

interface IPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string
}

interface IResponse {
  data: {
    message: string;
    playlists: {
      items: IPlaylist[];
    }
  }
}

const Home: React.FC = () => {
  const { filters } = useFilters();

  const [country, setCountry] = useState('');
  const [locale, setLocale] = useState('');
  const [limit, setLimit] = useState(0);

  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');

  const [error, setError] = useState('');

  const [playlists, setPlaylists] = useState<IPlaylist[]>([]);

  function checkScrollTop() {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', checkScrollTop);

  function handleSearch(title: string) {
    setName(title);
  }

  function handleSelectedFilter(key: string, value: string) {
    switch (key.toLowerCase()) {
      case 'locale':
        setLocale(value);
        break;
      case 'país':
        value = value === 'en_US' ? 'US' : value;
        setCountry(value);
        break;
      case 'limit':
        setLimit(Number(value));
        break;
      default:
        break;
    }
  }

  function clearFilters() {
    setCountry('');
    setLocale('');
    setLimit(0);
  }

  function handleSelectValue(key: string) {
    let value = '';
    switch (key.toLowerCase()) {
      case 'locale':
        value = locale || '';
        break;
      case 'país':
        value = country || '';
        break;
      default:
        break;
    }

    return value;
  }

  const getPlaylists = useCallback(async () => {
    try {
      setLoading(true);

      const playlistsResponse = await api.get('/', {
        params: {
          country: country || null,
          locale: locale || null,
          limit: limit > 0 ? limit : null,
        },
      }) as IResponse;

      const newPlaylists = name
        ? playlistsResponse.data.playlists.items.filter(
          (e) => e.name.toUpperCase().includes(name.toUpperCase()),
        )
        : playlistsResponse.data.playlists.items;

      setPlaylists(newPlaylists);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data.error.message);
      } else {
        setError('Internal server error');
      }
    }
  }, [name, country, locale, limit]);

  useEffect(() => {
    getPlaylists();
    const interval = setInterval(() => getPlaylists(), 30000);
    return () => {
      clearInterval(interval);
    };
  }, [getPlaylists]);

  useEffect(() => {
    if (error) {
      toast(error, {
        onClose: () => setError(''),
      });
    }
  }, [error]);

  return (
    <Container>
      <Alert name={error ? 'Toastify__toast--error' : ''} />
      <Header>
        <SearchContainer>
          <InputDiv>
            <Input
              placeholder="Search Playlist"
              value={name}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <SearchIconDiv>
              <FaSearch size="3rem" color="#2ba690" />
            </SearchIconDiv>
          </InputDiv>
        </SearchContainer>

        <FiltersContainer>
          {filters.map((filter) => filter.values && (
            <Select
              key={filter.id}
              id={filter.id}
              options={filter.values}
              defaultValue=""
              value={handleSelectValue(filter.name)}
              onChange={(e) => handleSelectedFilter(filter.name, e.target.value)}
            />
          ))}

          <Select
            id="Number of playlists"
            options={[
              { value: '1', name: 'Show 1 playlist' },
              { value: '5', name: 'Show 5 playlists' },
              { value: '10', name: 'Show 10 playlists' },
              { value: '30', name: 'Show 30 playlists' },
              { value: '50', name: 'Show 50 playlists' },
            ]}
            defaultValue=""
            value={limit === 0 ? '' : limit.toString()}
            onChange={(e) => handleSelectedFilter('Limit', e.target.value)}
          />

          <ClearFiltersButton onClick={clearFilters}>Clear filters</ClearFiltersButton>
        </FiltersContainer>
      </Header>

      {loading ? (
        <Lottie
          height={100}
          width={100}
          speed={1}
          options={{
            loop: true,
            autoplay: true,
            animationData: loader,
          }}
          isClickToPauseDisabled
        />
      ) : (
        <PlaylistContainer className={!playlists.length ? 'empty' : ''}>
          {playlists.length ? (
            playlists.map((playlist) => (
              <PlaylistItem
                key={playlist.id}
                title={playlist.name}
                rate={playlist.tracks.total}
                url={playlist.external_urls.spotify}
                poster={playlist.images[0].url}
              />
            ))
          ) : (
            <Warning />
          )}
        </PlaylistContainer>
      )}

      {showScroll && (
        <UpButton onClick={scrollTop}>
          <FaArrowUp size="4rem" />
        </UpButton>
      )}
    </Container>
  );
};

export default Home;
