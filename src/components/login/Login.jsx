import {useState} from "react"
import {GoHomeIcon} from '../../components/icons/Icons';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';

import "./LoginPage.css"

const defaultTheme = createTheme();

export default function Login({handleSubmit,  setEmail, setPassword, color, errorText}) {
  const [showPassword, setShowPassword] = useState(false)
  const { t } = useTranslation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

    return(
        <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" className="loginPage" 
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
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
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
            <Typography component="h1" variant="h5">
              {t('signIn')}
            </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t('emailAddress')}
                  name="email"
                  autoComplete="off"
                  autoFocus
                  onChange={(value) => setEmail(value.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  onChange={(value) => setPassword(value.target.value)}
                  InputProps={{
                  endAdornment: (
                  <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                      style={{marginRight: 2}}
                      >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                  </InputAdornment>
                  ),
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={t('rememberMe')}
                />
                 <FormHelperText error style={{color : `${color}`}}>{t(errorText)}</FormHelperText>
                 <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  {t("loginButton")}
                </Button>
                <Grid container spacing={2} alignItems="center" justify="center" className="muiLink">
                  <Grid item xs>
                    <MuiLink variant="body2" component={Link} to="/forgetPassword" >
                    {t("forgotPassword")}
                    </MuiLink>
                  </Grid>
                  <Grid item>
                    <MuiLink variant="body2" component={Link} to="/signUp" >
                      {t("noAccount")}
                    </MuiLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
}


