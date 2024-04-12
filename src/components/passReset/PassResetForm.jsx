import {GoHomeIcon} from '../icons/Icons.jsx';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from '../modals/ChangePasswordModal.jsx';
import { FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const defaultTheme = createTheme();

export default function PassResetForm({setModal, newPassword, openModal, modal, setEmail, setNewPassword , setCanfirmNewPassword,  handleSubmit, color, errorText}) {

  const navigate = useNavigate()
  const { t } = useTranslation();
    
  const censel = () => {
    setModal(false)
    navigate("/signIn")
  }

  return(
      <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" className="findPage" 
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/loginPageBackgraund.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        sx={{ 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}
        >
        <CssBaseline />
        <Grid item sm={9} md={5} component={Paper} elevation={6} square 
          style={{
              background: "white",
              borderRadius: "15px",
              boxShadow: '2px 4px 4px rgba(157, 154, 161, 1)',
          }}>
          <Box
            sx={{
              my: 8,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Link to="/" className="backButton">
            <GoHomeIcon color="white" />
          </Link> 
            {!modal ?
            <>
              <Typography component="h1" variant="h5">
                {t("findYourAccount")}
              </Typography>
              <Box component="form" sx={{ mt: 1 }}>
              <Typography sx={{ mt: 3 }}>
                {t("enterEmailToSearch")}
              </Typography>
              <Grid item xs={12} style={{ paddingTop: 5 }}>
                <TextField
                  required
                  id="email"
                  label={t("emailAddress")}
                  name="email"
                  autoComplete="off"
                  autoFocus
                  fullWidth
                  onChange={(value) => setEmail(value.target.value)}
                />
              </Grid>
              <FormHelperText error style={{color : `${color}`}}>{errorText}</FormHelperText>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 ,  }}>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mr: 1 }}
                    onClick={ censel }
                  >
                    {t("cancelButton")}
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={openModal}
                >
                  {t("searchButton")}
                </Button>
              </Box>
              </Box>
            </>
            :
            <>
              <Typography component="h1" variant="h5">
                {t("newPassword")}
                </Typography>
              <Box component="form" sx={{ mt: 1 }}>
                <ChangePasswordModal 
                  setNewPassword={setNewPassword} 
                  newPassword={newPassword}
                  setCanfirmNewPassword={setCanfirmNewPassword}
                  censel={censel} 
                  handleSubmit={handleSubmit} 
                  color={color} 
                  errorText={errorText}
                />
              </Box>
            </>
            }
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}