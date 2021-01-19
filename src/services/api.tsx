import axios from 'axios';

const token = process.env.REACT_APP_SPOTIFY_TOKEN;

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse/featured-playlists',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default api;
