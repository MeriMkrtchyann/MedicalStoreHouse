import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserPhoneAndValidation({aboutUser, setAboutUser}){

    const { t } = useTranslation();
    const [phone , setPhone] = React.useState("")
    const [isUserPhoneInvalid , setIsUserPhoneInvalid] = React.useState(!phone.length  ? false : true )

    const handleContactChange  = ( event ) => {
        let number = event.target.value.slice(5,event.target.value.length).replace(/\D/g, '')
        if (number.length < 9) {
            if (!number || number.length === 8 ){
                setIsUserPhoneInvalid(false) 
            }else {
                setIsUserPhoneInvalid(true) 
            }
            if (number.length < 9){
                setPhone(number)
            }
            if ( number.length < 8) {
                setAboutUser({
                  ...aboutUser ,
                  aboutUserPhome: {
                    value : `+374${number}`,
                    valid : false,
                  }
              })
              } else {
                console.log("valid")
                setAboutUser({
                    ...aboutUser ,
                    aboutUserPhome: {
                        value : `+374${number}`,
                        valid : true,
                    }
                })
              }
        }
    }

    return (
        <Grid item xs={12} style={{ paddingTop: 5 }}>
            <input type="hidden" name="contact" value={phone} />
            <TextField
                required
                fullWidth
                id="contact"
                label={t('phoneLabel')}
                type="text"
                name="formattedContact"
                autoComplete="contact"
                value={`(+374) ${phone}`}
                onChange={handleContactChange}
                error={isUserPhoneInvalid}
            />
            {isUserPhoneInvalid ? (
                <FormHelperText error>{t('phoneError')}</FormHelperText>
            ) : (
                <FormHelperText>{t('phoneError')}</FormHelperText>
            )}   
        </Grid>
    )
}