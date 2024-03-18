import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "../ordercard/OrderCard";
import { totalPrice } from "../../utils/utils";
//styles
import "./CheckoutSideMenu.css";
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  
  const handleDelete = (id) =>{
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)   
  }
  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.01.2015',
      products: context.cartProducts.map(product => ({
        productId: product.id,
        title: product.title,
        image: product.image,
        price: product.price
      })),
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <XMarkIcon
          className="w-5 h-5"
          onClick={() => context.closeCheckoutSideMenu()}
        />
      </div>
      <div className="px-6 flex-1">
      {
        context.cartProducts.map((product) =>(
          <OrderCard 
          key={product.id}
          productId={product.id}
          title={product.title}
          image ={product.image}
          price={product.price}
          handleDelete={handleDelete}
          />
        ))
      }
      </div>
      <div className="flex justify-between items-center p-6 mb-6">
        <h2 className="font-medium text-xl">Total: ${totalPrice(context.cartProducts)}</h2>
        <Link to='/my-order/last'>
        <button className="w-full bg-black py-3 text-white rounded-lg ml-2" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;
