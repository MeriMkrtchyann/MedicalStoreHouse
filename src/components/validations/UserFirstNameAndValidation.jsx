import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import { useTranslation } from 'react-i18next';

const UserFirstNameAndValidation = ({aboutUser, aboutUserFirstName, setAboutUser }) => {
  
  const [userFirstName, setUserFirstName] = React.useState("");
  const isUserNameInvalid = userFirstName.length >= 1 && userFirstName.length < 2;
  const { t } = useTranslation();
  
  const handleUserNameChange = (event) => {
    const input = event.target.value;
    const onlyLettersRegex = /^[a-zA-Z]+$/;
    if (!input.length) {
      setUserFirstName("");
    } else if (input.length < 15 && input.match(onlyLettersRegex)) {
      const formattedName = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      setUserFirstName(formattedName);
      if (userFirstName.length >= 2) {
        setAboutUser({
          ...aboutUser ,
          aboutUserFirstName : {
            value : formattedName,
            valid: true
          }
      })
      } else {
        setAboutUser({
            ...aboutUser ,
            aboutUserFirstName : {
              value : formattedName,
              valid: false
            }
        })
      }
    }
  };

  return (
    <Grid item xs={12}>
      <TextField
        name="firstName"
        required
        fullWidth
        id="firstName"
        label={t('firstNameLabel')}
        autoFocus
        autoComplete="off"
        value={userFirstName}
        onChange={handleUserNameChange}
        error={isUserNameInvalid}
      />
      {isUserNameInvalid ? (
        <FormHelperText error>{t('firstNameError')}</FormHelperText>
      ) : (
        <FormHelperText>{t('firstNameError')}</FormHelperText>
      )}
    </Grid>
  );
};

export default UserFirstNameAndValidation;
