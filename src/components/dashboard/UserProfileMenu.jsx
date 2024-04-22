import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import useSignOut from 'react-auth-kit/hooks/useSignOut';
// import { useNavigate } from "react-router";

export default function UserProfileMenu() {
    const signOut = useSignOut()
    // const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        handleClose()
        signOut()
        window.location.reload()
        // navigate('/')

    }

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        Settings
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}