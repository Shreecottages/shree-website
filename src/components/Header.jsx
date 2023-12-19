import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Stack,
  Container,
  Hidden,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../styles/Header.css";
import PropTypes from "prop-types";

const fbContact = require("../assets/fb-Contact.png");
const ytContact = require("../assets/yt-Contact.png");
const instaContact = require("../assets/insta-Contact.png");
const logo = require("../images/logo.svg");
const logoBack = require("../images/logo.png");

const Header = (props) => {
  const Window = props.window; // Destructuring props
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: Window ? Window() : undefined,
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  Header.propTypes = {
    window: PropTypes.func, // Assuming 'window' prop is a function
  };

  Header.defaultProps = {
    window: undefined, // Setting a default value for the window prop
  };

  return (
    <AppBar
      color="default"
      position="sticky"
      sx={{
        top: "0",
        background: trigger ? "#fff6f3" : "transparent",
        color: "#3D2521",
      }}
    >
      <Stack
        direction="row"
        sx={{
          textAlign: "center",
          justifyContent: "flex-end",
          pr: "10vw",
          backgroundColor: "secondary.main",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <CallIcon
            sx={{
              display: "inline",
              color: "common.white",
              width: "2vw",
              padding: "0.1vw 0.1vw 0px",
              marginRight: "5px",
            }}
          />
          <Typography variant="subtitle1" color="common.white">
            +91 9427424157
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ marginLeft: "25px", alignItems: "center" }}
        >
          <MailIcon
            sx={{
              color: "common.white",
              width: "2vw",
              padding: "0.1vw 0.1vw 0px",
              marginRight: "5px",
              justifyContent: "center",
            }}
          />
          <Typography variant="subtitle1">info@shreecottages.com</Typography>
        </Stack>
      </Stack>

      <Container
        maxWidth="100vw"
        sx={{ p: { md: "0vw 1vw", lg: "0vw 10vw" }, m: "0", width: "100vw" }}
      >
        <Toolbar disableGutters>
          <Box className="logo">
            <Link to="/" style={{ cursor: "pointer" }}>
              <img src={logoBack} alt="Shree cottages logo black" />
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Hidden mdDown>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                style={{
                  padding: "0",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "#3D2521",
                }}
              >
                <ListItemButton>
                  <ListItemText disableTypography className="list">
                    Home
                  </ListItemText>
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                style={{ textDecoration: "none", color: "#3D2521" }}
              >
                <ListItemButton>
                  <ListItemText disableTypography className="list">
                    About
                  </ListItemText>
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/gallery/images/all"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                style={{ textDecoration: "none", color: "#3D2521" }}
              >
                <ListItemButton>
                  <ListItemText disableTypography className="list">
                    Gallery
                  </ListItemText>
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/wedding-event-planning"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                style={{ textDecoration: "none", color: "#3D2521" }}
              >
                <ListItemButton>
                  <ListItemText disableTypography className="list">
                    Wedding & Event
                  </ListItemText>
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                style={{ textDecoration: "none", color: "#3D2521" }}
              >
                <ListItemButton>
                  <ListItemText disableTypography className="list">
                    Rooms
                  </ListItemText>
                </ListItemButton>
              </NavLink>
              <div
                style={{
                  textDecoration: "none",
                  color: "#3D2521",
                  justifyContent: "center",
                }}
              >
                <ListItemButton
                  onClick={handleOpenUserMenu}
                  aria-haspopup="true"
                  role="button"
                >
                  <ListItemText disableTypography className="more">
                    More{" "}
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: { md: "1rem", lg: "1.2rem" } }}
                    />
                  </ListItemText>
                </ListItemButton>
              </div>

              {/* <Link
                style={{
                  textDecoration: "none",
                  color: "#3D2521",
                  justifyContent: "center",
                }}
              >
                <ListItemButton onClick={handleOpenUserMenu}>
                  <ListItemText disableTypography className="more">
                    More{" "}
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: { md: "1rem", lg: "1.2rem" } }}
                    />
                  </ListItemText>
                </ListItemButton>
              </Link> */}
              <ListItemButton>
                <Button
                  variant="contained"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/travel/hotels/shree%20cottages%20sasan%20gir/entity/CgsIxu-aud-E-ITmARAB/prices?q=shree%20cottages%20sasan%20gir&g2lb=2502548%2C2503771%2C2503781%2C2504094%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4757164%2C4814&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwj4jd_CgLb_AhUAAAAAHQAAAAAQBA&ts=CAESABogCgIaABIaEhQKBwjnDxAGGAoSBwjnDxAGGAsYATICEAAqBAoAGgA",
                      "_blank"
                    )
                  }
                  sx={{
                    fontSize: "1.4rem",
                    "@media (max-width: 900px)": {
                      fontSize: "1.2rem",
                    },
                    "@media (max-width: 1050px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  Book now
                </Button>
              </ListItemButton>
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
        {/* <div
          onClick={() => setOpen(false)}
          //  onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
          style={{
            backgroundColor: "primary.main",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        > */}
        <div
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
          style={{
            backgroundColor: "primary.main",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box className="logo">
            <Link to="/" style={{ cursor: "pointer" }}>
              <img src={logo} alt="" />
            </Link>
          </Box>
          <Box sx={{ alignSelf: "center" }}>
            <Button
              variant="contained"
              onClick={() =>
                window.open(
                  "https://www.google.com/travel/hotels/shree%20cottages%20sasan%20gir/entity/CgsIxu-aud-E-ITmARAB/prices?q=shree%20cottages%20sasan%20gir&g2lb=2502548%2C2503771%2C2503781%2C2504094%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4757164%2C4814&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwj4jd_CgLb_AhUAAAAAHQAAAAAQBA&ts=CAESABogCgIaABIaEhQKBwjnDxAGGAoSBwjnDxAGGAsYATICEAAqBAoAGgA",
                  "_blank"
                )
              }
              sx={{
                fontSize: "1.4rem",
                "@media (max-width: 900px)": {
                  fontSize: "1.2rem",
                },
                "@media (max-width: 1050px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Book now
            </Button>
            <IconButton>
              <CloseIcon onClick={() => setOpen(false)} />
            </IconButton>
          </Box>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <List
            sx={{
              justifyContent: "center",
              textAlign: "center",
              alignSelf: "center",
            }}
            className="main-list"
          >
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  Home
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  About
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/gallery/images/all"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  Gallery
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/wedding-event-planning"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  Wedding & Event
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/rooms"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  Rooms
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/best-places-to-visit-in-sasan-gir"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  Experience
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  Blogs
                </Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                disableTypography
                className="ham-list"
                onClick={() => setOpen(false)}
              >
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "#3D2521" }}
                >
                  Contact us
                </Link>
              </ListItemText>
            </ListItemButton>
            {/* <ListItemButton onClick={handleOpenUserMenu} ><ListItemText disableTypography className="list">More  <KeyboardArrowDownIcon sx={{fontSize:"1.2rem"}} /></ListItemText></ListItemButton> */}

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
            <Grid direction="row" sx={{ m: "0.5vw 0vw" }}>
              <a
                href="https://www.facebook.com/ShreeCottages"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={fbContact}
                  alt="Facebook"
                  className="sns-h"
                  style={{ cursor: "pointer" }}
                />
              </a>
              {/* <img
                src={fbContact}
                alt="Facebook"
                className="sns-h"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/ShreeCottages",
                    "_blank"
                  )
                }
              /> */}
              <a
                href="https://www.instagram.com/shreecottages"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instaContact}
                  alt="Instagram"
                  className="sns-h"
                  style={{ cursor: "pointer" }}
                />
              </a>

              {/* <img
                src={instaContact}
                href="/"
                alt="Instagram"
                className="sns-h"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/shreecottages",
                    "_blank"
                  )
                }
              /> */}
              <a
                href="https://www.youtube.com/@shreecottages"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ytContact}
                  alt="YouTube"
                  className="sns-h"
                  style={{ cursor: "pointer" }}
                />
              </a>

              {/* <img
                src={ytContact}
                href="/"
                alt="Youtube"
                className="sns-h"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@shreecottages",
                    "_blank"
                  )
                }
              /> */}
            </Grid>
          </List>
        </div>
      </SwipeableDrawer>
      <Menu
        sx={{ mt: "72px", background: "none" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "buttom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          sx={{
            fontFamily: "Bona Nova",
            fontSize: "1.4rem",
            "@media (max-width: 1100px)": { fontSize: "1rem" },
          }}
        >
          <Link
            to="/best-places-to-visit-in-sasan-gir"
            style={{ textDecoration: "none", color: "#3D2521" }}
            onClick={handleCloseUserMenu}
          >
            Experience
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "Bona Nova",
            fontSize: "1.4rem",
            "@media (max-width: 1100px)": { fontSize: "1rem" },
          }}
        >
          <Link
            to="/blogs"
            style={{ textDecoration: "none", color: "#3D2521" }}
            onClick={handleCloseUserMenu}
          >
            Blogs
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "Bona Nova",
            fontSize: "1.4rem",
            "@media (max-width: 1100px)": { fontSize: "1rem" },
          }}
        >
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#3D2521" }}
            onClick={handleCloseUserMenu}
          >
            Contact us
          </Link>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
