import React, { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IProduct, IproductCatergory } from "../interfaces/IProduct";
import { addItemToCart } from "../slices/cartSlice";
import { fetchProducts } from "../slices/productSlice";
import { AppDispatch, RootState } from "../store";

const ProductsGrid: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const categories: IproductCatergory[] = ["chairs", "tables", "tops"];

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const isProductInCart = (product: IProduct) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const handlePriceClick = (product: IProduct) => {
    dispatch(addItemToCart(product));
    navigate("/checkout");
  };
  function capitalizeFirstLetter(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  }

  return (
    <div>
      <a href="/" className="text-decoration-none fw-bold text-black">
        Products
      </a>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="my-4">{capitalizeFirstLetter(category)}</h2>
          <div className="container mt-4">
            <div className="row">
              {products
                .filter((product: IProduct) => product.category === category)
                .map((product: IProduct) => (
                  <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card border-0 shadow-lg h-100">
                      <div className="position-relative">
                        <img
                          src={product.image}
                          className="card-img-top object-fit-fill card-img object-fit-scale"
                          alt={product.name}
                        />
                      </div>
                      <div className="card-body bg-light-subtle rounded-3 p-3">
                        <h5
                          className="text-primary fw-bold mb-2 mb-5"
                          style={{ cursor: "pointer" }}
                        >
                          {product.name}
                        </h5>
                        <div className="d-flex justify-content-between align-items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handlePriceClick(product)}
                            className="d-flex align-items-center justify-content-between p-2 p-md-3 bg-yellow-1 border-primary-btn buy-button position-relative btn"
                          >
                            <div className="fw-bold">
                              <p className="mb-0">$ {product.price}</p>
                            </div>
                          </button>
                          <button
                            type="button"
                            onClick={() => dispatch(addItemToCart(product))}
                            className={`d-flex align-items-center justify-content-between p-2 p-md-3 bg-yellow-2 border-primary-btn buy-button position-relative btn ${
                              isProductInCart(product) ? "disabled" : ""
                            }`}
                            disabled={isProductInCart(product)}
                          >
                            <div className="fw-bold">
                              {isProductInCart(product)
                                ? "Added"
                                : "Add to cart"}
                            </div>
                            <MdOutlineKeyboardDoubleArrowRight size={24} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
