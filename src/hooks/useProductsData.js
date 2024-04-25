import { useEffect, useState } from "react";

const useProductsData = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  
  const refetchData = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchCoffees = async () => {
      const apiURL = "https://espresso-emporium-server-zeta.vercel.app/coffees";
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setCoffees(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoffees();
  }, [toggle]);


  return { coffees, loading, refetchData };
};

export default useProductsData;
