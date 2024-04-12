import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import UserPasswordValidation from '../validations/UserPasswordValidation';
import UserCanfirmPasswordAndValidation from "../validations/UserCanfirmPasswordAndValidation"

export default function ChangePasswordModal({setNewPassword,newPassword, setCanfirmNewPassword, censel, handleSubmit, color, errorText }){

    return (
        <>
        <UserPasswordValidation setNewPassword={setNewPassword}/>
        <UserCanfirmPasswordAndValidation setCanfirmNewPassword={setCanfirmNewPassword} password={newPassword}/>

        <FormHelperText error style={{color : `${color}`}}>{errorText}</FormHelperText>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 ,  }}>
            <Button
                variant="contained"
                fullWidth
                sx={{ mr: 1 }}
                onClick={ censel }
            >
                Cancel
            </Button>
            <Button
            variant="contained"
            type="submit"
            fullWidth
            onClick={handleSubmit}
            >
                Change
            </Button>
        </Box>
        </>
    )
}