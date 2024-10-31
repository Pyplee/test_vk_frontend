import axios from 'axios';

// const apiToken = import.meta.env.VITE_PUBLIC_API_TOKEN;

const api = axios.create({
  baseURL: 'https://api.github.com/search/',
});

const routes = {
  filterJavaScript: (page: string | number) => `repositories?q=javascript&sort=stars&order=asc&page=${page}`,
};

export { api, routes };