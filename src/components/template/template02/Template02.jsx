import './Template02.css'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Heading from '../Heading'
import CustomTextField from '../../common/customTextField/CustomTextField'

const template02 = () => {
    return (
        <Grid item sm={12} md={6} className='template02'>
            <Paper className='template02__card'>
                <Heading
                    text='Template02'
                    textColor='white'
                    backgroundColor='darkGrey'
                />
                <div className="template02__cardBody">
                    <CustomTextField
                        label='Enter Email'
                    />
                    <CustomTextField
                        label='Enter Password'
                    />
                </div>
            </Paper>            
        </Grid>
    )
}

export default template02
