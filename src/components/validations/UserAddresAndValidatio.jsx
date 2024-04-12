import * as React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';

export default function UserAddresAndValidation({aboutUser, setAboutUser}){

    const { t } = useTranslation();
    const [addres , setAddres] = React.useState("")

    const handleAddresChange  = ( event ) => {
        const addres = event.target.value
        setAddres(addres)
        setAboutUser({
            ...aboutUser ,
            aboutUserAddres: {
              value : addres,
              valid : true,
            }
        })
    }

    return (
        <Grid item xs={12}style={{ paddingTop: 5 }}>
            <TextField
                required
                fullWidth
                id="address"
                label={t('addressLabel')}
                type="text" 
                name="address"
                autoComplete="off"
                value={addres}
                onChange={handleAddresChange}
    
            />
            <FormHelperText>{t('addressHelperText')}</FormHelperText>
        </Grid>
    )
}