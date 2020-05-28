import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
  console.log("API IS=", API);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    try {
      getProducts().then(data => {
        if (!data.error) {
          setProducts(data);
        } else {
          setError(data.error);
        }
      });
    } catch (error) {
      console.log("Unable to get products from db", error);
    }
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the t-shirts store ">
      <div className="row text-center">
        <h1 className="text-white">All of T-shirts</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
