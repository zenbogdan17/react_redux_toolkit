import styles from './CartButton.module.css';
import { mainActions } from '../../store/main-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatchAction = useDispatch();

  const itemQuantity = useSelector((state) => state.cart.itemsQuantity);

  const cartVisibilityHandler = () => {
    dispatchAction(mainActions.toggleCartVisibility());
  };

  return (
    <button className={styles.button} onClick={cartVisibilityHandler}>
      <span>Корзина</span>
      <span className={styles.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
