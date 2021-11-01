import './CustomTextField.css'
import TextField from '@mui/material/TextField'

const CustomTextField = ({ label }) => {
    return (
        <TextField
            className='customTextField'
            variant='outlined'
            label={label}
        />
    )
}

export default CustomTextField
