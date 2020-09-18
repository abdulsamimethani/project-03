import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import shoesContext from './Context';
import './css/ProductItem.css';

function Productitem() {

  const { id } = useParams();
  const shoesData = useContext(shoesContext);
  const Shoes = shoesData[id];
  return (
    <div className="detail">
      <div>
        <img src={Shoes.src} alt="" />
      </div>
      <div className="box">
        <div className="row">
          <h3>{Shoes.title}</h3>
          <span>${Shoes.price}</span>
        </div>
        <p>{Shoes.color.map((item, id) => {
          return (
            <button style={{ background: item }} key={id}></button>
          )
        })}</p>
        <p>{Shoes.description}</p>
        <p>{Shoes.context}</p>
        <Link to="/cart">Add to Cart</Link>
      </div>
    </div >
  );
}

export default Productitem;
