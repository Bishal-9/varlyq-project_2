import './Template01.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Heading from '../Heading'

const Template01 = () => {
    return (
        <Grid item sm={12} md={6} className='template01'>
            <Paper className='template01__card'>
                <Heading
                    text='Template01'
                    textColor='white'
                    backgroundColor='violet'
                />
                <img
                    src="https://images.unsplash.com/photo-1635326666652-929c9e759b62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80"
                    alt="card"
                />
            </Paper>
        </Grid>
    )
}

export default Template01
