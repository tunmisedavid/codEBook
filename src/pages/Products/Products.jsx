import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import FilterBar from "./components/FilterBar";
import { ProductCard } from "../../components";
import UseTitle from "../../hooks/UseTitle";
import { useFIlter } from "../../context";
import { getProductList } from "../../services";
import { toast } from "react-toastify";

const Products = () => {
  UseTitle("Explore books");
  const { productList, initialProductList } = useFIlter();
  const [show, setShow] = useState(false);
  const search = useLocation();
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
      } catch (error) {
        toast.error(error.message, {closeButton: true, position: "bottom-center"})
      }
    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  return (
    <main>
      <section className="py-5 dark:bg-gray-900 ">
        <div className="py-5 flex justify-between w-[90%] m-auto">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({productList.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};

export default Products;
