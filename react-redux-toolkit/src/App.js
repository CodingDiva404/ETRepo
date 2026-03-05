import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="app-layout">
        <ProductList />
        <CartSummary />
      </div>
    </div>
  );
}
export default App;