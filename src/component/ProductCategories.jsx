import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";

const ProductCategories = () => {
  return (
    <section className="py-4 md:py-8 bg-gray-50">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-serif ">
            Create Custom Products, Super Fast 🚀
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} category={cat} />
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {categories.slice(0, 8).map((cat, idx) => (
            <CategoryCard
              key={idx}
              category={cat}
              size="sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
