import React from 'react';
import './App.css';
import jsonData from './jsonData.json';
import { useDispatch } from 'react-redux';
import { inc, dec } from './redux/reducer';

const Product = () => {
  const dispatch = useDispatch();

  const handleAdd = (data) => {
    dispatch(inc({ dataName: data.name, dataPrice: data.price }));
  };

  const handleRemove = (data) => {
    dispatch(dec({ dataName: data.name, dataPrice: data.price }));
  };

  return (
    <div>
      {jsonData.products.map((data) => (
        <div key={data.id} className='satya'>
          <img src={data.src} style={{ width: "400px", height: "400px" }} alt={`Product: ${data.name}`} />
          <p>name: {data.name} | price: {data.price}</p>
          <button className='sss' onClick={() => handleAdd(data)}>
            Add
          </button>
          <button className='sss' onClick={() => handleRemove(data)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
