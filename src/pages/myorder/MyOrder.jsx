import {useContext} from "react"
import { Link } from "react-router-dom"

import { ChevronLeftIcon } from "@heroicons/react/24/solid" 
import {ShoppingCartContext} from  "../../context/Context"
import Layout from "../../components/layout/Layout"
import OrderCard from "../../components/ordercard/OrderCard"

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index==='last') {
    index = context.order?.length - 1
  }
  
    return (
      <>
      <Layout >
      <div className="flex justify-center items-center w-80 relative mb-6">
          <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor pointer"></ChevronLeftIcon>
          </Link>
       <h1>My Order</h1>

        </div>
       <div className="flex flex-col w-80">
      {
        context.order?.[index]?.products.map((product) =>(
          <OrderCard 
          key={product.productId} 
          productId={product.productId} 
          title={product.title}
          image ={product.image}
          price={product.price}
          />
        ))
       }

      </div>
       </Layout>
      </>
    )
  }
  
  export default MyOrder
  