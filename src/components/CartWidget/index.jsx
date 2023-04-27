import { TiShoppingCart } from "react-icons/ti";
import styles from "./cartWidget.module.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className={styles.cartCont}>
      <i className="CartIcon">
        <Link to="/cart">
          <TiShoppingCart className={styles.iconoCarro} />
        </Link>
      </i>

      {getQuantity() > 0 ? <i className={styles.cartCant}>{getQuantity()}</i> : null}
    </div>
  );
}

export default CartWidget;