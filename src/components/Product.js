import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import shoesContext from './Context';
import './css/Product.css'

function Product() {
  let Data = useContext(shoesContext);
  return (
    <div className="Shoes-container" id="product">
      {Data.map((val, id) => {
        return (
            <div className="card" key={id}>
              <Link to={`product/${id}`}>
                <img src={val.src} alt="" />
              </Link>
            <div className="content">
              <Link to={`product/${id}`}>
                <h3>{val.title}</h3>
              </Link>
              <span>{val.price}</span>
              <p>{val.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Product;
