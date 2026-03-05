import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cartSlice";

const products = [
  {
    id: 1,
    name: "Shoes",
    price: 2000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 2,
    name: "Bag",
    price: 1500,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
  },
  {
    id: 3,
    name: "Watch",
    price: 3000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} className="product-card">

          <img src={product.image} alt={product.name} />

          <h4>{product.name}</h4>
          <p>₹{product.price}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default ProductList;