import './Sidebar.css'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SidebarFolder from '../sidebarFolder/SidebarFolder'

import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'

const Sidebar = ({ sidebarIsOpen }) => {

    const SidebarList = [
        { folder: 'Widgets', Icon: <WidgetsRoundedIcon />, subfolder: ['Widget 1', 'Widget 2', 'Widget 3'] },
        { folder: 'Mailbox', Icon: <EmailRoundedIcon />, subfolder: ['Inbox', 'Unseen', 'Seen'] }
    ]

    return (
        <div
            className='sidebar'
        >
            <div style={{ width: sidebarIsOpen }}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <img
                                className='sidebar__Logo'
                                src='https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip'
                                alt="logo"
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary='Google'
                            className='sidebar__companyName'
                        />
                    </ListItem>
                </List>
                <Divider />
                {
                    SidebarList.map(item => (
                        <SidebarFolder
                            key={item.folder}
                            item={item}
                            sidebarIsOpen={sidebarIsOpen}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
