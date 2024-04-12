import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: '20px', 
  marginRight: "95%",
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor:"#282e59",
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 5),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: drawerWidth, 
    boxSizing: 'border-box',
  },
});

const categories = [
  { primary: 'Components'},
  { primary: 'Peripherals'},
  { primary: 'Accessories' },
  { primary: 'Components'},
  { primary: 'Security Systems'},
  { primary: 'Networking' },
  { primary: 'Tools' },
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleDrawerOpenAndClose = () => {
    setOpen(!open);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <Box sx={{ display: 'flex' }}> 
      <CssBaseline />
      <AppBar open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenAndClose}
            edge="start"
          >
          <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <StyledDrawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader 
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "img/loginName.webp"})`,
            width: '100%',
            backgroundSize: 'cover',
            padding : "5px",
          }}
        >
          <IconButton onClick={handleDrawerOpenAndClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List 
          style={{
            padding:"0px",
          }}
        >
          {categories && categories.map(({ primary, subcategories }, index) => (
            <React.Fragment key={primary} style={{paddingTop:"0px"}}>
              <ListItem key={primary} disablePadding>
                <ListItemButton onClick={() => handleCategoryClick(primary)}>
                  <ListItemText primary={primary} />
                    {subcategories && subcategories.length > 0 && (
                      selectedCategory === primary ? <ExpandLessIcon /> : <ExpandMoreIcon />
                    )}
                </ListItemButton>
              </ListItem>
              {subcategories && selectedCategory === primary && (
                <List>
                  {subcategories && subcategories.map((subcategory, subIndex) => (
                    <ListItem key={`${primary}-${subIndex}`} disablePadding>
                      <ListItemButton onClick={() => console.log(subcategory)} sx={{ pl: 4 }}>
                        <ListItemText primary={subcategory} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </StyledDrawer>
    </Box>
  );
}
