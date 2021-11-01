import './Dashboard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

const Dashboard = () => {
    return (
        <main className='dashboard'>
            {
                [1, 2, 3, 4, 5, 6].map(element => (
                    <Card 
                        key={element}
                        sx={{ maxWidth: 345 }} 
                        className='dashboard__item'
                    >
                        <CardContent className='dashboard__itemContent'>
                            <div className="dashboard__itemLeft">
                                <Typography
                                    gutterBottom
                                    variant="h3"
                                    component="div"
                                    className='dashboard__cardValue'
                                >
                                    44
                                </Typography>
                                <Typography
                                    variant='h6'
                                    component='p'
                                    className='dashboard__cardTopic'
                                >
                                    User Registration
                                </Typography>
                            </div>
                            <div className="dashboard__itemRight">
                                <PersonAddAlt1Icon
                                    className='dashboard__cardIcon'
                                />
                            </div>
                        </CardContent>
                        <div className="dashboard__footer">
                            More Info
                            <ArrowForwardRoundedIcon
                                className='dashboard__footerIcon'
                            />
                        </div>
                    </Card>
                ))
            }
        </main>
    )
}

export default Dashboard
