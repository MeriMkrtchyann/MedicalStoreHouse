import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import { useTranslation } from 'react-i18next';


export default function UserNameAndValidation({aboutUser, aboutUserName, setAboutUser}) {

    const [userName, setUserName] = React.useState('');
    const isUserNameInalid = userName.length >= 1 && userName.length < 4;
    const { t } = useTranslation();
    
    const handleUserLastNameChange = (event) => {
        const formattedName = event.target.value;
        if (formattedName.length < 20){
            setUserName(formattedName)
            if (formattedName.length > 3) {
                setAboutUser({
                  ...aboutUser ,
                  aboutUserName : {
                    value : formattedName,
                    valid: true
                  }
              })
              } else {
                setAboutUser({
                    ...aboutUser ,
                    aboutUserName : {
                      value : formattedName,
                      valid: false
                    }
                })
              }
        }
    };

    return (
        <Grid item xs={12}  style={{ paddingTop: 5 }}>
            <TextField
                name="username"
                required
                fullWidth
                id="username"
                label={t('username')}
                value={userName}
                autoComplete="off"
                onChange={handleUserLastNameChange}
                error={isUserNameInalid}
            />
             {isUserNameInalid ? (
                <FormHelperText error>
                    {t('usernameError')}
                </FormHelperText>
            ):(
                <FormHelperText >
                   { t('usernameError')}
                </FormHelperText>
            )}
        </Grid>
    );
}
