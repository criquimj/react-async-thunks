import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotal = useSelector((state) => state.cart.totalAmount);
  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggleCart());
  };
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {cartTotalQuantity} ${cartTotal.toFixed(2)}
      </span>
    </button>
  );
};

export default CartButton;
