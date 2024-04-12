import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import writeCategoresData from "../../../services/categories/FirebaseSetCategories";
import readCategoresData from "../../../services/categories/firebaseGetCategories"
import firebaseDeleteCategory from '../../../services/categories/firebaseDeleteCategories';
import firebaseUpdateCategory from '../../../services/categories/firebaseUpdateCategory'
import "./ProductCategories.css"
import { FaPen, FaTrash, FaCheck, FaTimes } from '../../icons/Icons';


export default function ProductCategories({categories, setCategories}) {
  const [category, setCategory] = useState('')
  const [editCategory , setEditCategory] = useState('');
  const [editCategoryId, setEditCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await readCategoresData();
      if (data){
        setCategories(data)
      }else {
        setCategories("")
      }
    };
    fetchCategories();
  },[categories, category]);

  const handleDeleteCategory = async (categoryId ) => {
    try {
      await firebaseDeleteCategory(categoryId);
    } catch(e) {
      console.error(e.message);
    }
  };

  const handleEditCategory = async (categoryId) => {
    setEditCategoryId(categoryId);
  }

  const handleUpdateCategory =async (event) => {
    event.preventDefault();
    if (editCategoryId && editCategory) {
      try {
        await firebaseUpdateCategory(editCategoryId, editCategory);
        setEditCategory("")
        setEditCategoryId(null);
      } catch (e) {
        console.log(e.message);
      }
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (category){
      try {
        await writeCategoresData(category);
        setCategory("")
      } catch(e) {
        console.log(e.message);
      }
    }
  };

  return (
      <div className='addCategory'>
        <Box
          component="form"
          sx={{
            width: 300,
            maxWidth: '100%',
          }}
          style={{
            display: 'flex',
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField fullWidth label="Categories" id="categories" value={category} onChange={(e) => setCategory(e.target.value)} />
          <Button variant="contained" type="submit"> Add </Button>
        </Box>
        <div className='allCategories'>
          <ul>
            {Object.keys(categories).map((key) => {
              const innerObject = categories[key];
              return (
                <li key={innerObject.categoryId}>
                  {editCategoryId === innerObject.categoryId ? (
                    <Box
                      component="form"
                      sx={{
                        width: 300,
                        maxWidth: '100%',
                      }}
                      style={{
                        display: 'flex',
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField fullWidth label="New Category Name" value={editCategory} onChange={(e) => setEditCategory(e.target.value)} />
                      <div className="icons faCheck">
                        <div onClick={handleUpdateCategory}><FaCheck/></div>
                        <div onClick={()=>setEditCategoryId(null)}><FaTimes/></div>
                      </div>
                    </Box>
                  ) : (
                    <>
                      {innerObject.categoryName}
                      <div className='icons'>
                        <div className='deleteIcon' onClick={() => handleDeleteCategory(innerObject.categoryId)}>
                          <FaTrash />
                        </div>
                        <div className='editIcon' onClick={() => handleEditCategory(innerObject.categoryId)}>
                          <FaPen />
                        </div>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  );
}
