import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
//styles
import "./ProductDetail.css"
import { XMarkIcon } from '@heroicons/react/24/solid'
const ProductDetail = () =>{
    
    const context = useContext(ShoppingCartContext)
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Details</h2>
                <XMarkIcon className="w-5 h-5" onClick={() => context.closeProductDetail()}/>
            </div>
            <figure>
                <img className="w-full h-full rounded-lg p-6" src={context.showProduct.image} alt="" />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-semibold text-2xl mb-2">{context.showProduct.title}</span>
                <span className="font-bold text-md mb-2" >{context.showProduct.price}</span>
                <span className="font-light mb-2">{context.showProduct.description}</span>
            </p>
        </aside>
    )
};
export default ProductDetail