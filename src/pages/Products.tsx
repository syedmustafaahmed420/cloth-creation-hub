
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const allProducts = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 89,
      image: "/placeholder.svg",
      rating: 4.8,
      category: "Shirts"
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 129,
      image: "/placeholder.svg",
      rating: 4.9,
      category: "Jackets"
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      price: 39,
      image: "/placeholder.svg",
      rating: 4.7,
      category: "T-Shirts"
    },
    {
      id: 4,
      name: "Slim Fit Jeans",
      price: 99,
      image: "/placeholder.svg",
      rating: 4.6,
      category: "Jeans"
    },
    {
      id: 5,
      name: "Wool Sweater",
      price: 119,
      image: "/placeholder.svg",
      rating: 4.8,
      category: "Sweaters"
    },
    {
      id: 6,
      name: "Leather Jacket",
      price: 299,
      image: "/placeholder.svg",
      rating: 4.9,
      category: "Jackets"
    },
    {
      id: 7,
      name: "Casual Shorts",
      price: 49,
      image: "/placeholder.svg",
      rating: 4.5,
      category: "Shorts"
    },
    {
      id: 8,
      name: "Business Shirt",
      price: 79,
      image: "/placeholder.svg",
      rating: 4.7,
      category: "Shirts"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category.toLowerCase() === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    console.log(`Added product ${productId} to cart`);
  };

  const categories = ["all", "shirts", "jackets", "t-shirts", "jeans", "sweaters", "shorts"];

  return (
    <div className="min-h-screen bg-white">
      <Header cartItems={cartItems} />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of premium clothing and accessories
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === "all" ? "All Items" : category}
                </Button>
              ))}
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Products
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
