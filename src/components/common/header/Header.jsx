import { useState, useEffect } from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

const Header = ({ setSidebarIsOpen }) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(Boolean(anchorEl))
    }, [anchorEl])

    return (
        <div className='header'>
            <section className="header__leftSection">
                <IconButton onClick={() => setSidebarIsOpen(s => s === '60px' ? '220px' : '60px')}>
                    <MenuRoundedIcon />
                </IconButton>
                <p>Home</p>
                <p>Contact</p>
            </section>

            <section className="header__rightSection">
                <Avatar
                    onClick={e => setAnchorEl(e.currentTarget)}
                />
                <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>My Account</MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
                </Menu>
            </section>
        </div>
    )
}

export default Header
