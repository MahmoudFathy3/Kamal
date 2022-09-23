import React,{useState, useEffect,useMemo} from "react";
import { useDispatch } from "react-redux";
import {getProducts } from "./Store/Products/Products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./Navigation/Navigation";


const App = () => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setHidden(true)
  },[])

  useMemo(() => {
    return dispatch(getProducts())
  },[dispatch])

  const FooterHandler = (isFooter) => {
    setHidden(isFooter);
  }
  
  return (
    <>
      <ToastContainer />
      <Navigation FooterHandler={FooterHandler} hidden={hidden} />
    </>
  );
};
export default App;
