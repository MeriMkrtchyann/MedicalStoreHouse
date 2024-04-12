import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function UserCanfirmPasswordAndValidation({password, setCanfirmNewPassword, aboutUser={}, setAboutUser=(()=>{})}){

    const { t } = useTranslation();
    const [canfirmPassword, setCanfirmPassword] = React.useState("")
    const [showCanfirmPassword, setShowCanfirmPassword] = React.useState(false);
    const [isCanfirmPasswordInvalid , setIsCanfirmPasswordInvalid] = React.useState(canfirmPassword.length ? true : false)

    const handlecanfirmPasswordChange  = ( event ) => {
        const canfirmPasswordValue = event.target.value
        setCanfirmPassword(canfirmPasswordValue)
        if (setCanfirmNewPassword){
            setCanfirmNewPassword(canfirmPasswordValue)
        }
        if (!(password === canfirmPasswordValue) && canfirmPasswordValue.length >= 1) {
            setIsCanfirmPasswordInvalid(true)
            setAboutUser({
              ...aboutUser ,
              aboutUserCanfirmPassword: {
                value : canfirmPasswordValue,
                valid : false,
              }
          })
          } else {
            setIsCanfirmPasswordInvalid(false)
            setAboutUser({
                ...aboutUser ,
                aboutUserCanfirmPassword: {
                    value : canfirmPasswordValue,
                    valid : true,
                }
            })
          }
    }

    const togglePasswordVisibility = () => {
        setShowCanfirmPassword(!showCanfirmPassword);
    };
    
    
    return (
        <Grid item xs={12} style={{ paddingTop: 5 }} >
            <TextField
                required
                fullWidth
                autoComplete="off"
                id="confirmPassword"
                label={t('confirmPasswordLabel')}
                type={showCanfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={canfirmPassword}
                onChange={handlecanfirmPasswordChange}
                error={isCanfirmPasswordInvalid}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                        edge="end"
                        style={{marginRight: 2}}
                        >
                        {showCanfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
            />
            {isCanfirmPasswordInvalid ? (
                <FormHelperText error>{t('confirmPasswordError')}</FormHelperText>
            ) : (
                    <FormHelperText>{t('confirmPasswordError')}</FormHelperText>
            )}
        </Grid>
    )
}