import { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/Cart";

function App() {
  const { userDetails } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const counterRef = useRef(1);
  useEffect(() => {
    dispatch(fetchUser(counterRef.current));
  }, [dispatch]);
  const nextDatas = () => {
    dispatch(fetchUser(++counterRef.current));
  };
  return (
    <>
      <Header />
      <ProductList />
      <div className="mx-20">
        <pre>user:{JSON.stringify(userDetails, undefined, 4)}</pre>
        <button
          onClick={nextDatas}
          className="p-2 bg-teal-700 text-sm rounded-xl"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
