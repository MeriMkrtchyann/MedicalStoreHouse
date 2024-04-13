import React from 'react';
import ProductTypes from './productTypes/ProductTypes';

export default function Praducts({categories}) {
  return (
    <div style={{display: 'flex', gap: 10}}>
        <ProductTypes categories={categories}/>
    </div>
  );
}
