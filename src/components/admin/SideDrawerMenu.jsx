import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AdminIcon from "../icons/avatars/AdminAvatar"

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 5),
  ...theme.mixins.toolbar,
}));

const categories = [
  { primary: "Catalog", subcategories: ["Products", "Categories"] },
  { primary: "Users"}
];

const SideDrawerMenu = ({admin, drawerWidth , setOpenDivMenu}) => {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const adminName = Object.keys(admin).map((id) => admin[id].name)

  const chooseType = (subcategory) => {
    setOpenDivMenu(subcategory)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    chooseType(category)
  };

  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 15,
    }}>
    <AdminIcon userName={adminName[0]} />
    </div>
    <List style={{ padding: '0px' }}>
      {categories.map(({ primary, subcategories }, index) => (
        <React.Fragment key={primary}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleCategoryClick(primary)}>
              <ListItemText primary={primary} />
              {subcategories && subcategories.length > 0 && (
                selectedCategory === primary ? <ExpandLessIcon /> : <ExpandMoreIcon />
              )}
            </ListItemButton>
          </ListItem>
          {subcategories && selectedCategory === primary && (
            <List>
              {subcategories.map((subcategory, subIndex) => (
                <ListItem key={`${primary}-${subIndex}`} disablePadding>
                  <ListItemButton onClick={() => chooseType(subcategory)} sx={{ pl: 4 }}>
                    <ListItemText primary={subcategory} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
  </Drawer>
  );
};

export default SideDrawerMenu;