import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function UserPasswordValidation({ aboutUser={}, setAboutUser=(() => {}), setNewPassword}){
    
    const { t } = useTranslation();
    const [password , setPassword] = React.useState("")
    const [showPassword, setShowPassword] = React.useState(false)
    const [isPasswordInvalid , setIsPasswordInvalid] = React.useState(!password.length ? false : true)
    
    const handlePasswordChange  = ( event ) => {
            const password = event.target.value
            const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[\w@$!%*?&.\\]{8,}$/;
            let isPasswordInvalid =  !password.match(passwordValidationRegex)
            setPassword(password)
            if (setNewPassword && !isPasswordInvalid){
                setNewPassword(password)
            }
            if (!password.length){
                setIsPasswordInvalid(false)
            }else if ( isPasswordInvalid ) {
                setIsPasswordInvalid(true)
                setAboutUser({
                  ...aboutUser ,
                  aboutUserPassword: {
                    value : password,
                    valid : false,
                  }
              })
            } else {
                setIsPasswordInvalid(false)
                setAboutUser({
                    ...aboutUser ,
                    aboutUserPassword: {
                        value : password,
                        valid : true,
                    }
                })
            }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
   
    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                fullWidth
                id="password"
                // label={setNewPassword ? "New Password" : "Password"}
                label={t('passwordLabel')}
                type={showPassword ? 'text' : 'password'}
                name="password"
                autoComplete="newPassword"
                value={password}
                onChange={handlePasswordChange}
                error={isPasswordInvalid}
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
             {isPasswordInvalid ? (
                <FormHelperText error> {t('passwordError')}</FormHelperText>
            ) : (
                <FormHelperText> {t('passwordError')}</FormHelperText>
            ) }
        </Grid>
    )
}