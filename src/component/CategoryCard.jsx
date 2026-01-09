import Link from "next/link";

const CategoryCard = ({ category, size = "lg" }) => {
  const isMobile = size === "sm";

  return (
    <Link
      href={"#"}
      className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden`}
    >
      <div
        className={`${category.color} ${
          isMobile ? "h-32" : "h-48"
        } flex items-center justify-center`}
      >
        {category.image && (
          <img
            src={category.image}
            alt={category.name}
            className="h-full object-contain"
          />
        )}
      </div>

      <div className={`${isMobile ? "p-3" : "p-4"} text-center`}>
        <h3
          className={`font-bold text-gray-900 ${
            isMobile ? "text-sm" : ""
          } mb-2`}
        >
          {category.name}
        </h3>

        <span
          className={`inline-block ${
            isMobile
              ? "text-xs px-3 py-1"
              : "text-sm px-4 py-2"
          } bg-black text-white rounded`}
        >
          Customize
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
