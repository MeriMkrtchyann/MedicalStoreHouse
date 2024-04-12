import React from 'react';
import ProductCategories from './productCategores/ProductCategories';

export default function Categories({categories, setCategories}) {
  return (
    <div style={{display: 'flex', gap: 10}}>
        <ProductCategories categories={categories} setCategories={setCategories} />
    </div>
  );
}
