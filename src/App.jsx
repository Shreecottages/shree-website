import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Hompage";
import CSlider from "./components/CSlider";
import Review from "./components/Review";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline, Paper } from "@mui/material";
import Ecard from "./components/Ecard";
//import Event from "./components/Event";
//import Experience from "./components/Experience";
//import Contact from "./components/contactPage/Contact";
//import AboutUsMain from "./components/AboutUsMain";

//import Room from "./components/Room";
import NotFound from "./components/NotFound";
//import ImageGallery from "./components/FarmImageGallery/ImageGallery";
import ImageGalleryView from "./components/FarmImageGallery/ImageGalleryView";
import VideoGalleryView from "./components/FarmImageGallery/VideoGalleryView";
import { BrowserRouter as Router, Routes, Route, redirect} from "react-router-dom";
import ScrollToTop from "./SmoothScroll";
import SmoothScroll from "./SmoothScroll";
import { Helmet } from "react-helmet";
//import ReactGA from 'react-ga';
import TagManager from "react-gtm-module";

const AboutUsMain = lazy(() => import("./components/AboutUsMain"));
const Room = lazy(() => import("./components/Room"));
const Event = lazy(() => import("./components/Event"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/contactPage/Contact"));
const ImageGallery = lazy(() => import("./components/FarmImageGallery/ImageGallery"));

//const TRACKING_ID = "G-F89GGM6Z6K";
//ReactGA.initialize(TRACKING_ID);

const tagManagerArgs = {
  gtmId: 'GTM-P4R7S95'
}
TagManager.initialize(tagManagerArgs)


const theme = createTheme({
  palette: {
    primary: {
      main: "#FFE2D8",
    },
    secondary: {
      light: "#9E837D",
      main: "#3D2521",
    },
    warning: {
      main: "#FFBB70",
      dark: "#FF867C",
    },
  },
  typography: {
    fontFamily: ["Bona Nova", "serif", "Inter", "Poppins"].join(","),
    color: "#3D2521",
    subtitle1: {
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "1vw",
      "@media (max-width:800px)": {
        fontSize: "1.4vw",
      },
    },
    subtitle2: {
      fontFamily: "Inter",
      fontSize: "0.75rem",
      "@media (max-width:900px)": {
        fontSize: "0.9rem",
      },
    },
    h2: {
      fontSize: "2.25rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
      color: "#3D2521",
      fontWeight: "400",
    },
    h3: {
      fontSize: "2vw",
      fontWeight: "400",
    },
    h4: {
      fontSize: "1.75rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
      fontWeight: "400",
      // wordWrap: 'normal',
      // flexWrap: 'nowrap'
    },
    h5: {
      fontSize: "1.35rem",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
      fontWeight: "400",
    },
    h6: {
      fontSize: "1.3vw",
    },
    body1: {
      fontFamily: "Poppins",
      color: "#484848",
      fontSize: "1.2rem",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
      letterSpacing: "0.07em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        textTransform:"none",
        contained: {
          background: "linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%);",
          color: "#3D2521",
          border: "none",
          boxShadow: "none",
          fontFamily: "Bona Nova",
          fontSize: "0.9rem",
          "@media (min-width:600px)": {
            fontSize: "1rem",
          },
          "@media (min-width:800px)": {
            fontSize: "1.2rem",
          },
          textTransform: "none",
        },
        contained2: {
          background: "#FFBB70",
          color: "#3D2521",
          boxShadow: "none",
          fontFamily: "Bona Nova",
          fontSize: "0.8rem",
          "@media (min-width:600px)": {
            fontSize: "1rem",
          },
          "@media (min-width:800px)": {
            fontSize: "1.2rem",
          },
          textTransform: "none",
          "&:hover": {
            cursor: "pointer",
            background: "transparent",
            border: "2px solid #3D2521",
            color: "#3D2521",
            boxShadow: "none",
            transition: "0.4s",
          },
        },
        outlined: {
          background: "none",
          border: "1.5px solid #3D2521",
          boxShadow: "none",
          fontFamily: "Bona Nova",
          color: "#3D2521",
          fontSize: "1rem",
          "@media (min-width:600px)": {
            fontSize: "1rem",
          },
          "@media (min-width:800px)": {
            fontSize: "1.2rem",
          },
          padding: "5px 20px",
          "@media (max-width:700px)": {
            padding: "2.5px 10px",
          },
          textTransform: "none",
          background: "linear-gradient(to left, transparent 50%, #FFBB70 50%) right",
          backgroundSize: "200%",
          "&:hover": {
            cursor: "pointer",
            backgroundPosition: "left",
            color: "#3D2521",
            boxShadow: "none",
            transition: "0.4s",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFF6F3",
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: {
          width: "3rem",
          hight: "0.5vw",
          borderRadius: "1vw",
          backgroundColor: "#3D2521",
          transform: "scale(0.55)",
          // marginRight: '-0.5rem',
          // marginLeft: '-0.5rem',
          padding: "0",
        },
        dot: {
          backgroundColor: "#C9A29C",
          width: "2rem",
          hight: "0.5vw",
          borderRadius: "1vw",
          marginRight: "-0.75rem",
          marginleft: "-0.75rem",
          transform: "scale(0.5)",
          padding: "0",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        color: "#3D2521",
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          borderRadius: "0px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        typography: {
          color: "#3D2521",
          fontFamily: "Bona Nova",
          textTransform: "none",
          opacity: 1,
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.4rem",
          },
          "&:hover": {
            background: "#000000",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        typography: {
          fontFamily: "Bona Nova",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        fontFamily: "Bona Nova",
        tab: {
          textTransform: "none",
          opacity: "1",
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.4rem",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        titleTypography: {
          variant: "h2",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        Appbar: {
          color: "#3D2521",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
      <Paper sx={{backgroundColor: "#FFF6F3"}}>
        <Header />

        <Box className="body" style={{backgroundColor:"#FFFFFF"}}>
        {/* <Router> */}
            <SmoothScroll>
            <Routes>
              <Route
                exact
                path="/"
                element={<Homepage />}
              />

              <Route
                exact
                path="/about"
                element={
                <React.Suspense fallback='Loading...'>
                  <AboutUsMain />
                  </React.Suspense>
                  }
              />

              <Route
                exact
                path="/gallery"
                element={<React.Suspense fallback='Loading...'>
                <ImageGallery />
                </React.Suspense>}
              >

                
                  <Route index element={<ImageGalleryView />} />
                  
                  <Route
                    exact
                    path="/gallery/images/all"
                    element={<ImageGalleryView />}
                  />

                  <Route
                    exact
                    path="/gallery/videos/"
                    element={<VideoGalleryView />}
                  />

                  <Route
                    exact
                    path="/gallery/images/resort"
                    element={<ImageGalleryView />}
                  />

                  <Route
                    exact
                    path="/gallery/images/decoration"
                    element={<ImageGalleryView />}
                  />

                  <Route
                    exact
                    path="/gallery/images/banquest-hall"
                    element={<ImageGalleryView />}
                  />

                  <Route
                    exact
                    path="/gallery/images/conference-room"
                    element={<ImageGalleryView />}
                  />

                  <Route
                    exact
                    path="/gallery/images/swimming-pool"
                    element={<ImageGalleryView />}
                  />
                  </Route>

              <Route
                exact
                path="/wedding-event-planning"
                element={<React.Suspense fallback='Loading...'>
                <Event />
                </React.Suspense>}
              />

              <Route
                exact
                path="/rooms"
                element={<React.Suspense fallback='Loading...'>
                <Room />
                </React.Suspense>}
              />

              <Route
                exact
                path="/best-places-to-visit-in-sasan-gir"
                element={<React.Suspense fallback='Loading...'>
                <Experience />
                </React.Suspense>}
              />

              <Route
                exact
                path="/contact"
                element={<React.Suspense fallback='Loading...'>
                <Contact />
                </React.Suspense>}
              />

            <Route exact path="*" element={<NotFound />} />
            </Routes>
            
            </SmoothScroll>
        {/* </Router> */}
          {/* <Homepage /> */}
          {/* <AboutUs/> */}
          {/* <Event /> */}
          {/* <Contact /> */}
          {/* <AboutUsMain /> */}
          {/* <Experience /> */}

          {/* <Router>
            <ImageGallery />

            <Routes>
              <Route
                exact
                path="/gallery/images/all"
                element={<ImageGalleryView />}
              />

              <Route
                exact
                path="/gallery/videos"
                element={<VideoGalleryView />}
              />
            </Routes>
          </Router> */}
          {/* <Gallery /> */}
        </Box>
        <Footer />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
