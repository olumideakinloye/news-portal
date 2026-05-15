import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

import Navbar from "../Components/Navbar";
import BreakingTicker from "../components/BreakingTicker";
import HeroSection from "../components/HeroSection";
import CategoryNav from "../components/CategoryNav";
import SearchBar from "../components/SearchBar";
import TrendingSidebar from "../components/TrendingSidebar";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

const Home = () => {
  const {
    articles,
    trending,
    loading,
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    error,
  } = useContext(NewsContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      <BreakingTicker headlines={trending} />
      <Navbar />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around">
          <CategoryNav active={category} setActive={setCategory} />

          <div className="my-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>

      <main className="max-w-7xl mx-auto px-4 pb-8">

        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-xl my-6">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <HeroSection article={articles[0]} />
          </div>

          <TrendingSidebar articles={trending} />
        </div>

        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-black text-blue-900">Latest News</h2>
          </div>

          <LatestNews articles={articles.slice(1)} loading={loading} />
        </section>

        <section className="mt-20 bg-blue-400 text-white rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-black">Subscribe to our Newsletter</h2>

          <p className="text-white mt-4">
            Stay updated with breaking news and top stories.
          </p>

          <div className="max-w-xl mx-auto mt-8 flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl placeholder:text-white/40 border border-white/40 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
