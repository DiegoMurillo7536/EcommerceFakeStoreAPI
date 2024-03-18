
const Card = ({title,category,price,image,showProduct,addProductsToCart,renderIcon,productId}) => {

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addProductsToCart(event); // Pasar el evento al método addProductsToCart
  };
  
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={showProduct} >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 px-0.5"> {category}</span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt="headphones" />
        <div
        onClick={handleAddToCart }>
          {renderIcon(productId)}
        </div>
        <p className="flex justify-between">
          <span className="text-sm font-light truncate mr-6 ">{title}</span>
          <span className="text-lg font-medium">{price}</span>
        </p>
      </figure>
    </div>
  );
};

export default Card;
