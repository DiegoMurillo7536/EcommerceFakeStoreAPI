import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";
import ProductDetail from "../../components/product-detail/ProductDetail";
import { ShoppingCartContext } from "../../context/Context";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";

function Home() {
  
  const context = useContext(ShoppingCartContext);
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setShowProduct(productDetail);
    context.closeCheckoutSideMenu();
  };
  const addProductsToCart = (event, productData) => {
    event.stopPropagation();

    const existingItem = context.cartProducts.find(
      (item) => item.id === productData.id
    );

    if (existingItem) {
      // Handle duplicate item scenario (e.g., display an alert)
      alert("Product already exists in cart!");
    } else {
      context.setCount(context.count + 1);
      context.setCartProducts([...context.cartProducts, productData]);
      context.openCheckoutSideMenu();
      context.closeProductDetail();
    }
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some((product) => product.id === id);

    return (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-2">
        {isInCart ? <CheckIcon /> : <PlusIcon />}
      </div>
    );
  };

  

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length ) {
        return(
          context.filteredItems?.map((item) => (
            <Card
              key={item.id}
              productId={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
              showProduct={() => showProduct(item)}
              addProductsToCart={() => addProductsToCart(event, item)}
              renderIcon={renderIcon}
            />
          )))
      }else{
        return(
          <div className="text-center">
            <h1 className="text-2xl font-bold">No results found</h1>
          </div>
        )
      }
    }
    else{
      return(
      context.items?.map((item) => (
        <Card
          key={item.id}
          productId={item.id}
          title={item.title}
          category={item.category}
          price={item.price}
          image={item.image}
          showProduct={() => showProduct(item)}
          addProductsToCart={() => addProductsToCart(event, item)}
          renderIcon={renderIcon}
        />
      )))
    }
  };


  return (
    <>
      <Layout>
        <h1 className="font-medium text-xl mb-4">Exclusive products</h1>
        <input
          type="text"
          placeholder="Search for a product"
          className="border border-black mb-6 rounded-lg text-center w-80 p-4 "
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;
