import { useState, useEffect, createContext } from "react";
import { fetchTopHeadlines, fetchTrendingNews, searchNews } from "../services/newsAPI";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("technology");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTrending = async () => {
      try {
        const data = await fetchTrendingNews();
        setTrending(data.slice(0, 6));
      } catch (err) {
        console.error(err);
      }
    };
    loadTrending();
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const data = searchQuery
          ? await searchNews(searchQuery)
          : await fetchTopHeadlines(category);
        setArticles(data);
        setError("");
      } catch (err) {
        setError("Failed to fetch news.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [category, searchQuery]);

  return (
    <NewsContext.Provider
      value={{ articles, trending, loading, category, setCategory, searchQuery, setSearchQuery, error }}
    >
      {children}
    </NewsContext.Provider>
  );
};