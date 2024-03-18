import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
    const {productId,title,image,price,handleDelete} = props;
    let renderXmarkIcon
    if (handleDelete) {
        renderXmarkIcon = <XMarkIcon className="w-5 h-5" onClick={()=> handleDelete(productId)} />
 
    }
    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 mb-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt={image} />
                </figure>
                <p className="text-sm font-light ">{title}</p>
            </div>
            
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderXmarkIcon}
            </div>
        </div>
    );

};

export default OrderCard;