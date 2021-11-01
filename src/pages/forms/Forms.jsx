import './Forms.css'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import Template01 from '../../components/template/template01/Template01'
import Template02 from '../../components/template/template02/Template02'
import Template03 from '../../components/template/template03/Template03'

const Forms = () => {
    return (
        <Box className='forms' sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className='forms__container'>
                {/* <Template01 /> */}
                <Template02 />
                <Template03 />
            </Grid>
        </Box>
    )
}

export default Forms
