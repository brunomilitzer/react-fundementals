import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const totalQuantity  = useSelector((state) => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggleCart());
    }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
