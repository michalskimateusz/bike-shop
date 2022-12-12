import { useStateContext } from "../context/StateContext";
import { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import Link from "next/link";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You for Your Order!</h2>
        <p className="email-msg">Check Your email for the receipt</p>
        <p className="description">
          If You have any questions, please email{" "}
          <a className="email" href="mailto:order@bikeshop.com">
            order@bikeshop.com
          </a>
        </p>
        <Link href="/">
          <button className="btn" type="button">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
