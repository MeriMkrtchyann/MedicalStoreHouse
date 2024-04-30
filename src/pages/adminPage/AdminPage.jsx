import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideDrawerMenu from '../../components/admin/SideDrawerMenu';
import AdminNav from '../../components/admin/AdminNav';
import Categories from '../../components/admin/Categoris';
import Praducts from '../../components/admin/Types';
import readCategoresData from "../../services/categories/firebaseGetCategories"
import UsersData from '../../components/admin/usersData/UsersData';
import "./AdminPage.css"


const drawerWidth = 240;

export default function PermanentDrawerLeft({ admin, setAdmin }) {

  const [openDivMenu , setOpenDivMenu] = useState(null)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')
  const [usersData, setUsersData] = useState(null)

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
  },[ category, categories ]);

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AdminNav setAdmin={setAdmin} drawerWidth={drawerWidth}/>
        <SideDrawerMenu admin={admin} drawerWidth={drawerWidth} setOpenDivMenu={setOpenDivMenu}/>
        {openDivMenu === "Categories" &&
          <Categories categories={categories} setCategories={setCategories} category={category} setCategory={setCategory}/>
        }
        {openDivMenu === "Products" &&
          <Praducts categories={categories}/>
        }
        {openDivMenu === "Users" &&
          <UsersData usersData={usersData} setUsersData={setUsersData}/>
        }
      </Box>
    );
  }