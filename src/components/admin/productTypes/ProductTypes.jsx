import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import writeTypeData from "../../../services/types/FirebaseSetTypes"
import './ProductTypes.css'; 

export default function ProductTypes({ categories }) {
  const [category, setCategory] = useState('');
  const [categoryId , setCategoryId] = useState('');
  const [id , setId] = useState('');
  const [name , setName] = useState('');
  const [price , setPrice] = useState('');
  const [quantity , setQuantity] = useState('');
  const [about , setAbout] = useState('');
  const [image , setImage] = useState('');

  const handleUpdateName = (event) => {
    setName(event.target.value);
  }
  const handleUpdateId = (event) => {
    setId(event.target.value);
  }
  const handleUpdatePrice = (event) => {
    setPrice(event.target.value);
  }
  const handleUpdateQuantity = (event) => {
    setQuantity(event.target.value);
  }
  const handleUpdateAbout = (event) => {
    setAbout(event.target.value);
  }
  const handleUpdateImage = (event) => {
    setImage(event.target.value);
  }

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    Object.keys(categories).forEach((key) => {
      const innerObject = categories[key];
      if(innerObject.categoryName === category){
        setCategoryId(innerObject.categoryId)
      }
    })
    if (category && name && categoryId){
      try {
        await writeTypeData({categoryId, id, name, price, quantity, about, image} );
        setId("")
        setCategory("");
        setName("");
        setPrice("")
        setQuantity("");
        setAbout("")
        setImage("")
      } catch(e) {
        console.log(e.message);
      }
    }
  };

  return (
    <div>
    <div>
    <form className="productTypesContainer" onSubmit={handleSubmit}>
      <FormControl className="formControl">
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          {categories && Object.keys(categories).map((key) => {
            const innerObject = categories[key];
            return (
              <MenuItem key={innerObject.categoryId} value={innerObject.categoryName}>
                {innerObject.categoryName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <TextField label="Praduct Id" id="id" value={id} onChange={handleUpdateId} />
      <TextField label="Praduct Name" id="name" value={name} onChange={handleUpdateName} />
      <TextField label="Praduct Price" id="price" value={price} onChange={handleUpdatePrice} />
      <TextField label="Praduct Quantity" id="quantity" value={quantity} onChange={handleUpdateQuantity} />
      <TextField label="About Praduct" id="about" value={about} onChange={handleUpdateAbout} />
      <TextField label="Praduct Image" id="image" value={image} onChange={handleUpdateImage} />
      <Button variant="contained" type="submit"> Add </Button>
    </form>
    </div>
    <div>
    {categories &&
      <table className="tabel">
        <thead>
          <tr>
            <th>Category name</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {categories && Object.keys(categories).map((category) => {
            const innerObject = categories[category];
            return (
              <tr key={innerObject.categoryName}>
                <td>{innerObject.categoryName}</td>
                <td>
                {console.log(innerObject.Products)}
                    {innerObject.Products && Object.keys(innerObject.Products).map((product) =>(
                      <p>{innerObject.Products[product].PraductName
}</p>
                    ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    }
    </div>
  </div>
  );
}
