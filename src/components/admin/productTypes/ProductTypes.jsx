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
  const [type , setType] = useState('');

  const handleUpdateType = (event) => {
    setType(event.target.value);
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
    if (category && type && categoryId){
      try {
        await writeTypeData(categoryId, type);
        setCategory("");
        setType("");
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
      <TextField label="Type" id="type" value={type} onChange={handleUpdateType} />
      <Button variant="contained" type="submit"> Add </Button>
    </form>
    </div>
    <div>
    {categories &&
      <table className="tabel">
        <thead>
          <tr>
            <th>Category name</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>
          {categories && Object.keys(categories).map((category) => {
            const innerObject = categories[category];
            return (
              <tr key={innerObject.categoryName}>
                <td>{innerObject.categoryName}</td>
                <td>
                    {innerObject.types && Object.keys(innerObject.types).map((type) => (
                      <p>{type}</p>
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
