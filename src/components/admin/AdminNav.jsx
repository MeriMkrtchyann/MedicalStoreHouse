import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { AdminIcon, ChartColumn, LogOut } from '../../components/icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import SearchBar from '../../components/admin/SearchBar';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)`
  background-color: black;
`;

export default function AdminNav({drawerWidth}){
    const navigate = useNavigate()
    return(
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <StyledToolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <SearchBar/>
            </div>
            <div className="iconsContainer">
              <div className="aboutShop">
                <ChartColumn />
              </div>
              <div className="aboutAdmin">
                <AdminIcon/>
              </div>
              <div className="logOut">
                <LogOut />
              </div>
              <div className="goShopIcon"  onClick={() => navigate("/")}>
                <FontAwesomeIcon icon={faShopify} />
              </div>
            </div>
          </StyledToolbar>
        </AppBar>
    )
}