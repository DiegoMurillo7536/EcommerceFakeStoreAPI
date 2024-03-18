import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // increment in shopping cart
  const [count, setCount] = useState(0);

  //open close product detail component
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // show product in product detail
  const [showProduct, setShowProduct] = useState({});

  // products in shopping cart
  const [cartProducts, setCartProducts] = useState([]);

  //open close checkout side menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //filter products by title
  const [searchByTitle, setSearchByTitle] = useState(null); 
  console.log('searchByTitle',searchByTitle)
  //items in homepage
  const [items, setItems] = useState(null);

  //filtered items in homepage
  const [filteredItems, setfilteredItems] = useState(null);

  const filteredItemsByTitle = (items,searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (searchByTitle) {
      setfilteredItems(filteredItemsByTitle(items, searchByTitle))
    }
  }, [items, searchByTitle]);

  console.log("filteredItems",filteredItems)
  //Order 
  const [order,setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        showProduct,
        setShowProduct,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setfilteredItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
