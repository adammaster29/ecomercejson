import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouseljson from "../carousel.json";
const Krousel = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products")
      .then((res) => setProducts(res.data.data.products));
  }, []);

  console.log(products);

    return (
      
      <Carousel className='Carousel'>
      {carouseljson.map( productscarousel => (
       <Carousel.Item className='container--carousel'>
          <img 
            className="d-block w-100 img--carousel"
            src={productscarousel.img}
            alt="First slide"
          />
          
          <Carousel.Caption>
            <h3 className='color_text_krouse'>{productscarousel.title}</h3>
            <p className='color_text_krouse'>Price: {productscarousel.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))
        }
    </Carousel>
  
      //   <Carousel className='Carousel'>
      //   {products.map( krouselProducts => (
      //    <Carousel.Item className='container--carousel'>
      //       <img 
      //         className="d-block w-100 img--carousel"
      //         src={krouselProducts.productImgs[2]}
      //         alt="First slide"
      //       />
            
      //       <Carousel.Caption>
      //         <h3 className='color_text_krouse'>{krouselProducts.title}</h3>
      //         <p className='color_text_krouse'>Price: {krouselProducts.price}</p>
      //       </Carousel.Caption>
      //     </Carousel.Item>
      //     ))
      //     }
      // </Carousel>
    
            
       
    );
};

export default Krousel;