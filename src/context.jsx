import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getBasket, getProducts, getUser } from "./utils";
import Data from "./components/Data.jsx";
import { uid } from "uid";

const initialState = {
  amount: 0,
  total: 0,
  cart: Data,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const id = uid()

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [amountp, setAmountp] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(getUser("user"));
  const [description, setDescription] = useState("");
  const [basket, setBasket] = useState(getBasket("basket"));
  const [products, setProducts] = useState(getProducts("products"));
  const [image, setImage] = useState(`https://picsum.photos/200/300`);

  const login = () => {
    const newUser = { id: id, name: name, psw: password };
    setUser(newUser);
    navigate("/");
  };
  const addProduct = () => {
    const newProduct = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      amount: amountp,
      category: categoryp,
    };
    setProducts([...products, newProduct]);
  };
  const addBasket = (
    id,
    title,
    price,
    description,
    image,
    amount,
    category
  ) => {
    const newBasketItem = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      amount: amount,
      category: category,
    };
    setBasket([...basket, newBasketItem]);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.parse(user));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("products", JSON.stringify(products));

  }, [user, products, basket]);
  return (
    <AppContext.Provider
      value={{
        login,
        addBasket,
        addProduct,
        basket,
        setBasket,
        name,
        setName,
        products,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
