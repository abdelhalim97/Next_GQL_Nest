import React, { useState } from 'react'
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightFromBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const MenuNav = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
    const handleClose = () => {setAnchorEl(null);};
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}>
            <FontAwesomeIcon icon={faUser} className='text-sec cursor-pointer'/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}
        id="account-menu"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',backgroundColor:'#0E0E0E',color:'#fff',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,height: 32,ml: -0.5,mr: 1,
            },
            '&:before': {
              content: '""',display: 'block',position: 'absolute',top: 0,right: 14,width: 10,
              height: 10,bgcolor: 'background.paper',transform: 'translateY(-50%) rotate(45deg)',zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faUserPlus} className='text-fourth'/>
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faRightFromBracket} className='text-fourth'/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuNav 