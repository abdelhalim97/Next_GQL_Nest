import React, { useState } from 'react'
import { Box,Toolbar,List,CssBaseline,Typography,Divider,IconButton,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleChevronLeft, faCircleChevronRight, faQuestion } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 270;
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height:73,
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  type Props = {children: JSX.Element,};
const DrawerLeft = ({children}:Props) => {
const theme = useTheme();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {setOpen(true);};
  const handleDrawerClose = () => {setOpen(false);};
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <Drawer variant="permanent" open={open} PaperProps={{
    sx: {backgroundColor: '#1F1F23',color: "#fff",zIndex:51,top:72,maxHeight:'84vh'},
    }
    }>
        <div className='flex items-center font-bold text-sm'>
        {open &&<div className='ml-5'>FOLLOWED CHANNELS</div>}
      {open ?
        <DrawerHeader onClick={handleDrawerClose}>
            <IconButton>
                <FontAwesomeIcon icon={faCircleChevronLeft} className='text-fourth'/>
            </IconButton>
        </DrawerHeader>
        :
        <DrawerHeader onClick={handleDrawerOpen}>
          <IconButton>
          <FontAwesomeIcon icon={faCircleChevronRight} className='text-fourth'/>
          </IconButton>
        </DrawerHeader>
        }
        </div>
        <Divider className='bg-fourth'/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts','Inbox', 'Starred', 'Send email', 'Drafts',
          ].map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <FontAwesomeIcon icon={faQuestion} className='text-fourth'/> : <FontAwesomeIcon icon={faQuestion} className='text-fourth'/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider className='bg-fourth'/>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <FontAwesomeIcon icon={faQuestion} className='text-fourth'/> : <FontAwesomeIcon icon={faQuestion} className='text-fourth'/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* <Box sx={{height:40}}/> */}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1,height:'100%' }}>
      {/* <DrawerHeader></DrawerHeader> */}
        {children}
      </Box>
    </Box>
  )
}
export default DrawerLeft