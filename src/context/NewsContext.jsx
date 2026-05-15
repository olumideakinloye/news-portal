import { createContext, useEffect, useState } from "react";
import {
  fetchTopHeadlines,
  fetchTrendingNews,
  searchNews,
} from "../services/newsApi";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("technology");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const loadNews = async () => {
    try {
      setLoading(true);

      const data = searchQuery
        ? await searchNews(searchQuery)
        : await fetchTopHeadlines(category);

      const trendingData = await fetchTrendingNews();

      setArticles(data);
      setTrending(trendingData.slice(0, 6));
      setError("");
    } catch (err) {
      setError("Failed to fetch news.");
      console.log(err);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, [category, searchQuery]);

  return (
    <NewsContext.Provider
      value={{
        articles,
        trending,
        loading,
        category,
        setCategory,
        searchQuery,
        setSearchQuery,
        error,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};