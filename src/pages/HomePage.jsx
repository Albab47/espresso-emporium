import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Products from "../components/Products";

const HomePage = () => {
  // const coffees = useLoaderData();
  
  return (
    <>
      <Banner />
      <Features />
      <Products />
    </>
  );
};

export default HomePage;
