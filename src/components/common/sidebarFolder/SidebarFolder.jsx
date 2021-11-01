import { useState, useEffect } from 'react'
import './SidebarFolder.css'
import WidgetsIcon from '@mui/icons-material/Widgets'
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { TransitionGroup } from 'react-transition-group'

const SidebarFolder = ({ item, sidebarIsOpen }) => {

    const [toShow, setToShow] = useState([])

    const handleClick = e => {
        e.preventDefault()

        if (toShow.length < 1) {
            setToShow(item.subfolder)
        } else {
            setToShow([])
        }
    }

    useEffect(() => {
        if (sidebarIsOpen === '60px') setToShow([])
    }, [sidebarIsOpen])

    return (
        <div className='sidebarFolder'>
            <List className='sidebarFolder__folder' onClick={handleClick}>
                <ListItemIcon>
                    {item.Icon}
                </ListItemIcon>
                <ListItemText primary={item.folder} />
            </List>
            <List>
                <TransitionGroup>
                    <Collapse>
                        {
                            toShow.map((t, index) => (
                                <ListItem button key={index} className='sidebarFolder__subfolder'>
                                    <ListItemIcon>
                                        <WidgetsIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={t}
                                        className='sidebarFolder__subfolder__text'
                                    />
                                </ListItem>
                            ))
                        }
                    </Collapse>
                </TransitionGroup>
            </List>
        </div>
    )
}

export default SidebarFolder
