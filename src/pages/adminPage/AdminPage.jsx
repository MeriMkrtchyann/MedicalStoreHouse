import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideDrawerMenu from '../../components/admin/SideDrawerMenu';
import AdminNav from '../../components/admin/AdminNav';
import Categories from '../../components/admin/Categoris';
import "./AdminPage.css"

const drawerWidth = 240;

export default function PermanentDrawerLeft({setAdmin}) {

  const [openDivMenu , setOpenDivMenu] = useState(null)
  const [categories, setCategories] = useState([])

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AdminNav setAdmin={setAdmin} drawerWidth={drawerWidth}/>
        <SideDrawerMenu drawerWidth={drawerWidth} setOpenDivMenu={setOpenDivMenu}/>
        {openDivMenu === "Categories" &&
          <Categories categories={categories} setCategories={setCategories} />
        }
      </Box>
    );
  }