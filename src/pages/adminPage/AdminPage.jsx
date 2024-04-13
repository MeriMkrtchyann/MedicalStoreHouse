import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideDrawerMenu from '../../components/admin/SideDrawerMenu';
import AdminNav from '../../components/admin/AdminNav';
import Categories from '../../components/admin/Categoris';
import Praducts from '../../components/admin/Types';
import readCategoresData from "../../services/categories/firebaseGetCategories"

import "./AdminPage.css"

const drawerWidth = 240;

export default function PermanentDrawerLeft({setAdmin}) {

  const [openDivMenu , setOpenDivMenu] = useState(null)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')

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

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AdminNav setAdmin={setAdmin} drawerWidth={drawerWidth}/>
        <SideDrawerMenu drawerWidth={drawerWidth} setOpenDivMenu={setOpenDivMenu}/>
        {openDivMenu === "Categories" &&
          <Categories categories={categories} setCategories={setCategories} category={category} setCategory={setCategory}/>
        }
        {openDivMenu === "Products" &&
          <Praducts categories={categories}/>
        }
      </Box>
    );
  }