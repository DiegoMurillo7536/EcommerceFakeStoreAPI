import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import OrdersCard from "../../components/orderscard/OrdersCard"
import {ShoppingCartContext} from "../../context/Context"
function MyOrders() {
  const context = useContext(ShoppingCartContext) 
    return (
      <>
      <Layout >
      <h1 className="font-medium text-xl mb-4">My Orders</h1>
       {
        
        context.order.map((order,index)=> (
          <Link key={index} to={`/my-order/${index}`}>
          <OrdersCard totalPrice = {order.totalPrice} totalProducts = {order.totalProducts}/>
          
          </Link>

        ))
       }
       </Layout>
      </>
    )
  }
  
  export default MyOrders
  