import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Heading = ({ text, textColor, backgroundColor }) => {
    return (
        <Toolbar
            style={{
                color: textColor,
                background: backgroundColor
            }}
        >
            <Typography variant='h6' component='div'>
                {text}
            </Typography>
        </Toolbar>
    )
}

export default Heading
