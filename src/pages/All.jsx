import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
function All() {
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    async function fetchProductData() {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProductData(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProductData();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="p-6">
      <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchChange} />
      
      {isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}

      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                productData={product}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No products found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default All;
