import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserEmailAndValidation({aboutUser = {} , setAboutUser }){

    const { t } = useTranslation();
    const [email, setEmail] = React.useState('');
    let emailValidationRegex = ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    let isEmailInvalid = email.length >= 1  && !email.match(emailValidationRegex)

    const handleEmailChange  = ( event ) => {
        const email = event.target.value
        setEmail(email)
        if (isEmailInvalid || email.length < 1) {
            setAboutUser({
              ...aboutUser ,
              aboutUserEmail: {
                value : email,
                valid : false,
              }
          })
        } else {
            setAboutUser({
                ...aboutUser ,
                aboutUserEmail: {
                    value : email,
                    valid : true,
                }
            })
        }
    }

    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <TextField
                required
                fullWidth
                id="email"
                label={t('emailLabel')}
                type="email"
                name="email"
                autoComplete="off"
                valueemail
                value={email}
                onChange={handleEmailChange}
                error={isEmailInvalid}
            />
            {isEmailInvalid ? (
                <FormHelperText error>{t('emailError')}</FormHelperText>
            ):(
                <FormHelperText>{t('emailError')}</FormHelperText>
            )}
        </Grid>
    )
}