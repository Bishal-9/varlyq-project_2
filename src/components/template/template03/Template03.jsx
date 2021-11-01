import './Template03.css'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Heading from '../Heading'
import CustomTextField from '../../common/customTextField/CustomTextField'

const template03 = () => {
    return (
        <Grid item sm={12} md={6} className='template03'>
            <Paper className='template03__card'>
                <Heading
                    text='Template03'
                    textColor='black'
                    backgroundColor='lightgreen'
                />
                <div className="template03__cardBody">
                    <CustomTextField
                        label='First Name'
                    />
                    <CustomTextField
                        label='Last Name'
                    />
                    <CustomTextField
                        label='Email'
                    />
                    <CustomTextField
                        label='Phone Number'
                    />
                </div>
            </Paper>
        </Grid>
    )
}

export default template03
