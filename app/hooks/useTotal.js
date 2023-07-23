import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useTotal() {
  const cartItems = useSelector((state) => state.array.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.rs * item.qty,
      0
    );
    setTotal(totalPrice);
  }, [cartItems]);

  return total;
}
export default useTotal;
