import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
import {AppBar,Box, Toolbar,Stack, Container,Hidden,Typography,Menu,MenuItem, IconButton, SwipeableDrawer, Divider, List, ListItem, Avatar, Link, ListItemButton, ListItemText, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/Header.css';

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color="default" position="fixed" sx={{background: trigger ? "#fff6f3" : "transparent", color: '#3D2521'}}>
      <Stack direction={'row'} sx={{
                textAlign:'center',
                justifyContent: 'flex-end',
                pr: '10vw',
                backgroundColor: 'secondary.main',
                
            }}>
            <Stack direction={'row'} sx={{alignItems:'center'}}>
                <CallIcon sx={{display:'inline', color:"common.white",width:'2vw' ,padding: '0.1vw 0.1vw 0px', marginRight: '5px'}}/>
                <Typography variant='subtitle1' color="common.white">+91 9427424157</Typography>
            </Stack>
            <Stack direction={'row'} sx={{marginLeft: '25px', alignItems:'center' }}>
                <MailIcon sx={{color:"common.white",width:'2vw', padding: '0.1vw 0.1vw 0px', marginRight: '5px', justifyContent:'center'}}/>
                <Typography variant='subtitle1'>shreecottages57@gmail.com</Typography>
            </Stack>
        </Stack>

      <Container maxWidth="1920px" sx={{p:{md:"0vw 1vw",lg:"0vw 10vw"}, m:"0", width:"100vw"}}>
        <Toolbar disableGutters>
          <Box className="logo"><img src='../images/logo.png' alt="" /></Box>
          <Box sx={{display:"flex", flexDirection:"row"}}>
          <Hidden mdDown>
            {/* {navigationLinks.map((item) => (
              <Link
                className="list"
                color="textPrimary"
                 variant="button"
                 underline="none"
                 href={item.href}
                 key={item.name}
               >
                 {item.name}
               </Link>
             ))} */}
              <ListItemButton href="/"><ListItemText disableTypography className="list">Home</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">About</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">Gallery</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">Events & Meetings</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">Rooms</ListItemText></ListItemButton>
              <ListItemButton onClick={handleOpenUserMenu}><ListItemText disableTypography className="list">More <KeyboardArrowDownIcon sx={{fontSize:"1.2rem"}}/></ListItemText></ListItemButton>
              <ListItemButton href="/"><Button variant="contained" sx={{
                fontSize: '1.4rem',
                '@media (max-width: 900px)':{
                  fontSize: '1.2rem'
                },
                '@media (max-width: 1100px)':{
                  fontSize: '1rem'
                },
              }}>Book now</Button></ListItemButton>
           </Hidden>
           <Hidden mdUp>
             <IconButton onClick={() => setOpen(true)}>
               <MenuIcon />
             </IconButton>
           </Hidden>
           </Box>
         </Toolbar>
      </Container>
      <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
         >
         <div
           onClick={() => setOpen(false)}
          //  onKeyPress={() => setOpen(false)}
           role="button"
           tabIndex={0}
           style={{backgroundColor:"primary.main"}}
         >
           <IconButton>
             <CloseIcon onClick={() => setOpen(false)} />
           </IconButton>
         </div>
         <List sx={{pl:"0.5rem"}}>
              <ListItemButton href="/" ><ListItemText disableTypography className="list">Home</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">About</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">Gallery</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">Events & Meetings</ListItemText></ListItemButton>
              <ListItemButton href="/"><ListItemText disableTypography className="list">Rooms</ListItemText></ListItemButton>
              <ListItemButton onClick={handleOpenUserMenu} ><ListItemText disableTypography className="list">More  <KeyboardArrowDownIcon sx={{fontSize:"1.2rem"}} /></ListItemText></ListItemButton>
              <ListItemButton href="/"><Button variant="contained" sx={{
                fontSize: '1.4rem',
                '@media (max-width: 900px)':{
                  fontSize: '1.2rem'
                },
                '@media (max-width: 1050px)':{
                  fontSize: '1rem'
                },
                }}>Book now</Button></ListItemButton>
              
              
           {/* {navigationLinks.map((item) => (
             <ListItem>
             <ListItem key={item.name}>
               <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))} */}
        </List>
      </SwipeableDrawer>
      <Menu
                sx={{ mt: '65px' , background: 'none'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'buttom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem>Experience</MenuItem>
                    <MenuItem>Contact us</MenuItem>
            </Menu>
    </AppBar>

  );
}