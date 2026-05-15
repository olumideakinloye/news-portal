import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export const fetchTopHeadlines = async (category = "") => {
  const response = await api.get("/top-headlines", {
    params: {
      country: "us",
      category,
      apiKey: API_KEY,
    },
  });

  return response.data.articles;
};

export const searchNews = async (query) => {
  const response = await api.get("/everything", {
    params: {
      q: query,
      sortBy: "publishedAt",
      language: "en",
      apiKey: API_KEY,
    },
  });

  return response.data.articles;
};

export const fetchTrendingNews = async () => {
  const response = await api.get("/everything", {
    params: {
      q: "breaking",
      sortBy: "popularity",
      language: "en",
      apiKey: API_KEY,
    },
  });

  return response.data.articles;
};