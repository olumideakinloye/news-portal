import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY; // replace with your Guardian API key

const api = axios.create({
  baseURL: "https://content.guardianapis.com",
});

// Normalize Guardian articles to match the NewsAPI shape your app already uses
const normalize = (item) => ({
  title: item.webTitle,
  description: item.fields?.trailText || "",
  url: item.webUrl,
  urlToImage: item.fields?.thumbnail || null,
  publishedAt: item.webPublicationDate,
  source: { name: "The Guardian" },
  author: item.fields?.byline || null,
});

const baseParams = {
  "api-key": API_KEY,
  "show-fields": "trailText,thumbnail,byline",
  format: "json",
};

export const fetchTopHeadlines = async (category = "") => {
  const response = await api.get("/search", {
    params: {
      ...baseParams,
      section: category || undefined, // e.g. "technology", "sport", "business"
      "order-by": "newest",
      "page-size": 20,
    },
  });

  return response.data.response.results.map(normalize);
};

export const searchNews = async (query) => {
  const response = await api.get("/search", {
    params: {
      ...baseParams,
      q: query,
      "order-by": "newest",
      "page-size": 20,
    },
  });

  return response.data.response.results.map(normalize);
};

export const fetchTrendingNews = async () => {
  const response = await api.get("/search", {
    params: {
      ...baseParams,
      q: "breaking",
      "order-by": "relevance",
      "page-size": 20,
    },
  });

  return response.data.response.results.map(normalize);
};