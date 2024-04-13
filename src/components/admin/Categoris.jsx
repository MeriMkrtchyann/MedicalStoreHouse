import React from 'react';
import ProductCategories from './productCategores/ProductCategories';

export default function Categories({categories, setCategories,category,setCategory}) {
  return (
    <div style={{display: 'flex', gap: 10}}>
        <ProductCategories categories={categories} setCategories={setCategories} category={category} setCategory={setCategory} />
    </div>
  );
}
