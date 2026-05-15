const categories = [
  { label: "Top Stories", value: "general" },
  { label: "Technology", value: "technology" },
  { label: "Business", value: "business" },
  { label: "Sports", value: "sports" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
];

const CategoryNav = ({ active, setActive }) => {
  return (
    <div className="flex overflow-x-auto gap-3 py-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => setActive(category.value)}
          className={`text-black px-5 py-2 rounded-full capitalize whitespace-nowrap transition ${
            active === category.value
              ? "bg-blue-900 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;