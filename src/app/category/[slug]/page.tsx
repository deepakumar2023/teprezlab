import Link from "next/link";
import { Filter, SlidersHorizontal } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "best-sellers" },
    { slug: "new-arrivals" },
    { slug: "tshirts-polos" },
    { slug: "hoodies-jackets" },
    { slug: "jerseys-sportswear" },
    { slug: "uniforms-workwear" },
    { slug: "drinkware" },
    { slug: "caps-hats" },
    { slug: "bags-backpacks" },
    { slug: "office-stationery" },
    { slug: "boxes-and-packaging" },
    { slug: "travel-tech" },
    { slug: "corporate-gifting" },
    { slug: "home-wellness" },
    { slug: "paper-print-advertising" },
    { slug: "eco-friendly" },
    { slug: "promotional-giveaways" },
    { slug: "budget-gifts" },
    { slug: "premium-gifts" },
    { slug: "luxury-gifts" },
  ];
}

const products = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 12.99,
    image: "https://themerchlist.com/wp-content/uploads/2023/04/t-shirt-short-sleeve-with-768x768.png",
    colors: ["White", "Black", "Navy", "Red"],
  },
  {
    id: "2",
    name: "Premium Polo Shirt",
    price: 24.99,
    image: "bg-green-100",
    colors: ["White", "Black", "Blue"],
  },
  {
    id: "3",
    name: "Vintage Tee",
    price: 15.99,
    image: "bg-yellow-100",
    colors: ["Gray", "Black", "White"],
  },
  {
    id: "4",
    name: "Performance T-Shirt",
    price: 18.99,
    image: "bg-purple-100",
    colors: ["Black", "Navy", "Red"],
  },
  {
    id: "5",
    name: "Organic Cotton Tee",
    price: 16.99,
    image: "bg-pink-100",
    colors: ["White", "Natural", "Black"],
  },
  {
    id: "6",
    name: "Long Sleeve Shirt",
    price: 22.99,
    image: "bg-orange-100",
    colors: ["White", "Black", "Gray"],
  },
  {
    id: "7",
    name: "Athletic Fit Polo",
    price: 26.99,
    image: "bg-teal-100",
    colors: ["Navy", "White", "Red"],
  },
  {
    id: "8",
    name: "V-Neck T-Shirt",
    price: 14.99,
    image: "bg-indigo-100",
    colors: ["Black", "White", "Gray"],
  },
  {
    id: "9",
    name: "Crew Neck Tee",
    price: 13.99,
    image: "bg-rose-100",
    colors: ["White", "Black", "Blue"],
  },
  {
    id: "10",
    name: "Pocket T-Shirt",
    price: 17.99,
    image: "bg-cyan-100",
    colors: ["Navy", "Gray", "Olive"],
  },
  {
    id: "11",
    name: "Raglan Sleeve Tee",
    price: 19.99,
    image: "bg-lime-100",
    colors: ["White/Black", "White/Navy"],
  },
  {
    id: "12",
    name: "Henley Shirt",
    price: 21.99,
    image: "bg-amber-100",
    colors: ["Gray", "Black", "Navy"],
  },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="pt-[80px] lg:pt-[80px]  bg-white">
      <div className=" mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{categoryName}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {categoryName}
            </h1>
            <p className="text-gray-600">
              High-quality custom products with your design
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-smooth">
              <Filter className="w-5 h-5" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-smooth">
              <SlidersHorizontal className="w-5 h-5" />
              Sort
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div
                className={" flex items-center justify-center relative overflow-hidden"}
              >
                <span className="text-gray-400 text-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </span>
                
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-600">
                    {product.colors.length} colors
                  </span>
                </div>
                <div className="flex gap-1 mt-2">
                  {product.colors.slice(0, 4).map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
