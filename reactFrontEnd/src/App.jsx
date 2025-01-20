import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Adding an empty dependency array ensures the effect runs only once after the component mounts.

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
