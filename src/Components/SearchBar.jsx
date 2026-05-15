import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = ({ value, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
  relative flex items-center
  max-w-11/12 rounded-2xl
  border border-gray-200
  bg-white shadow-sm
  transition-all duration-300
  focus-within:ring-1 focus-within:ring-blue-300
  focus-within:border-blue-400
  focus-within:shadow-md focus-within:shadow-blue-100
"
    >
      <div className="flex items-center pl-5 pr-2">
        <Search
          size={18}
          className="text-gray-400 transition-colors duration-200 group-focus-within:text-blue-500"
        />
      </div>

      <input
        type="text"
        placeholder="Search breaking news, politics, sports..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full bg-transparent
          py-4 pr-4
          text-[15px] font-medium
          text-gray-800
          placeholder:text-gray-400
          placeholder:font-normal
          outline-none
        "
      />

      <div className="p-2">
        <button
          className="
            flex items-center gap-2
            rounded-xl
            bg-blue-600 hover:bg-blue-700
            px-5 py-2.5
            text-sm font-semibold text-white
            transition-all duration-200
            active:scale-[0.97]
          "
        >
          Search
        </button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
