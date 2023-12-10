import React, { lazy } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline, Paper } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TagManager from "react-gtm-module";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Hompage";
import NotFound from "./components/NotFound";
import ImageGalleryView from "./components/FarmImageGallery/ImageGalleryView";
import VideoGalleryView from "./components/FarmImageGallery/VideoGalleryView";
import SmoothScroll from "./SmoothScroll";

// Lazy loaded components
const AboutUsMain = lazy(() => import("./components/AboutUsMain"));
const Room = lazy(() => import("./components/Room"));
const Event = lazy(() => import("./components/Event"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/contactPage/Contact"));
const Blogs = lazy(() => import("./components/Blogs"));
const Blog2 = lazy(() => import("./components/Blog2"));
const ImageGallery = lazy(
  () => import("./components/FarmImageGallery/ImageGallery")
);

const tagManagerArgs = {
  gtmId: "GTM-P4R7S95",
};
TagManager.initialize(tagManagerArgs);

const theme = createTheme({
  // Your theme configurations
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Paper sx={{ backgroundColor: "#FFF6F3" }}>
          <Header />
          <Box className="body" style={{ backgroundColor: "#FFFFFF" }}>
            <Router>
              <SmoothScroll>
                <Routes>
                  <Route exact path="/" element={<Homepage />} />
                  <Route
                    exact
                    path="/about"
                    element={
                      <React.Suspense fallback="Loading...">
                        <AboutUsMain />
                      </React.Suspense>
                    }
                  />
                  <Route
                    exact
                    path="/gallery"
                    element={
                      <React.Suspense fallback="Loading...">
                        <ImageGallery />
                      </React.Suspense>
                    }
                  >
                    <Route index element={<ImageGalleryView />} />
                    <Route
                      exact
                      path="/gallery/images/all"
                      element={<ImageGalleryView />}
                    />
                    {/* ... Other Gallery Routes ... */}
                  </Route>
                  {/* Other Routes */}
                  {/* ... */}
                  <Route
                    exact
                    path="/wedding-event-planning"
                    element={<Event />}
                  />
                  {/* Other Routes */}
                  {/* ... */}
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/blogs" element={<Blogs />} />
                  <Route
                    exact
                    path="/places-to-visit-in-sasan-gir-wildlife-nature-heritage"
                    element={<Blog2 />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SmoothScroll>
            </Router>
          </Box>
          <Footer />
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
