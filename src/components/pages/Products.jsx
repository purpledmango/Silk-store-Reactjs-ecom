import { useEffect, useState } from "react";
import { getSingleCategory, fetchAllCategories } from "../../services/products";
import ProductCard from "../ProductCard";
import Filters from "../Filters";
import SideBar from "../SiderBar";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import Spinner from "../Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  const { cart, addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${category.toUpperCase()} - The Silk Store`;
    setLoading(true);
  }, [category]);

  useEffect(() => {
    const fetchNewData = async () => {
      try {
        const newData = await getSingleCategory(category);
        setProducts(newData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNewData();
  }, [category]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const getCategories = await fetchAllCategories();
        console.log(getCategories); // Check if categories are fetched
        setCategories(getCategories);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategoryData();
  }, []);

  return (
    <>
      {/* Accessibility Bar */}
      <Filters products={products} setProducts={setProducts} />

      <div className="w-full mx-2  lg:pt-6lg: pt-6 grid grid-cols-12 bg-bg-accent">
        {/* Side bar */}
        <SideBar
          allCategories={categories}
          cat={category}
          setCat={setProducts} // Assuming setProducts is correct for updating the category
        />

        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-3 my-3">
              {/* card */}
              {Array.isArray(products) &&
                products.map((item, key) => (
                  <ProductCard
                    key={key}
                    product={item}


                  />
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
