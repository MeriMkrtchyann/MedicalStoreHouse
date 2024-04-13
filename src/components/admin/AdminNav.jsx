import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { AdminIcon,  LogOut } from '../../components/icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)`
  background-color: black;
`;

export default function AdminNav({drawerWidth,setAdmin}){
    const navigate = useNavigate()

    const onClickLogOut = () => {
      setAdmin(null)
      navigate("/signIn")
    }
    return(
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <StyledToolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
            </div>
            <div className="iconsContainer">
              <div className="aboutAdmin">
                <AdminIcon/>
              </div>
              <div className="goShopIcon"  onClick={() => navigate("/")}>
                <FontAwesomeIcon icon={faShopify} />
              </div>
              <div className="logOut" onClick={onClickLogOut}>
                <LogOut />
              </div>
            </div>
          </StyledToolbar>
        </AppBar>
    )
}