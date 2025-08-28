import Cartlist from "./components/Cartlist";
import EmptyCart from "./components/EmptyCart";
import { UseCart } from "../../context";
import UseTitle from "../../hooks/UseTitle";

const Cart = () => {
  const {cartList} = UseCart();
  UseTitle(`Cart (${cartList.length})`);

  return (
    <div className="dark:bg-gray-900 h-150">
      {cartList.length ? <Cartlist /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
