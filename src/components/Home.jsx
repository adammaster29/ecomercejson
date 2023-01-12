import axios from "axios";
import React, { useEffect, useState } from "react";
import Krousel from "./Krousel";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products")
      .then((res) => setProducts(res.data.data.products));
  }, []);

  console.log(products);

  return (
    <div>
      <div className="container--category">
        <div className="filter grid-item">
          <div className="price-filter">
            <label htmlFor="from"> from</label>
            <input type="text" />
            <label htmlFor="from"> to</label>
            <input type="text" />
            <button className="btn-price">price</button>
          </div>
        </div>

        <div className="category grid-item">
          <h2>Category</h2>
          <div className="subcategory">
            <p className="pagraf--category">tecnology</p>
            <p className="pagraf--category">electrodomesticos</p>
            <p className="pagraf--category">all</p>
          </div>
        </div>

        <div className="input  grid-item">
          <input className="input-grid" type="text" />
          <button className="btn-enviar"><i class='bx bx-search'></i></button>
        </div>
      </div>

      {/* carousel */}
      <br />
      <br />
      
      <Krousel />
      <br />
      <br />
      <br />
      <div className="father--ul">
        {products.map((product) => (
          <ul className="map-ul-home" key={product.id}>
            <img
              className="img-products-home"
              src={product.productImgs[0]}
              alt=""
            />
            <div className="title-price">
              <li> Tilte: {product.title} </li>
              <li> Price: {product.price} </li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
