// /* eslint-disable indent */
// /* eslint-disable prettier/prettier */
// import React, { lazy } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Box } from "@mui/material";
// import Homepage from "../Hompage";
// import NotFound from "../NotFound";
// import ImageGalleryView from "../FarmImageGallery/ImageGalleryView";
// import VideoGalleryView from "../FarmImageGallery/VideoGalleryView";
// import SmoothScroll from "../../SmoothScroll";

// const AboutUsMain = lazy(() => import("../AboutUsMain"));
// const Room = lazy(() => import("../Room"));
// const Event = lazy(() => import("../Event"));
// const Experience = lazy(() => import("../Experience"));
// const Contact = lazy(() => import("../contactPage/Contact"));
// const Blogs = lazy(() => import("../Blogs"));
// // const Blog1 = lazy(() => import("../Blog1"));
// const Blog2 = lazy(() => import("../Blog2"));
// const ImageGallery = lazy(() => import("../FarmImageGallery/ImageGallery"));

// const Router = () => {
//  return (
//   <BrowserRouter>
//    <Box className="body" style={{ backgroundColor: "#FFFFFF" }}>
//     <SmoothScroll>
//      <Routes>
//       <Route>
//        <Route exact path="/" element={<Homepage />} />
//        <Route
//         exact
//         path="/about"
//         element={
//          <React.Suspense fallback="Loading...">
//           <AboutUsMain />
//          </React.Suspense>
//         }
//        />
//        <Routes
//         exact
//         path="/gallery"
//         element={
//          <React.Suspense fallback="Loading...">
//           <ImageGallery />
//          </React.Suspense>
//         }
//        />
//        <Route element={<ImageGalleryView />} />
//        <Route
//         exact
//         path="/gallery/images/all"
//         element={<ImageGalleryView />}
//        />
//        <Route
//         exact
//         path="/gallery/videos/"
//         element={<VideoGalleryView />}
//        />
//        <Route
//         exact
//         path="/gallery/images/resort"
//         element={<ImageGalleryView />}
//        />
//        <Route
//         exact
//         path="/gallery/images/decoration"
//         element={<ImageGalleryView />}
//        />
//        <Route
//         exact
//         path="/gallery/images/banquest-hall"
//         element={<ImageGalleryView />}
//        />
//        <Route
//         exact
//         path="/gallery/images/conference-room"
//         element={<ImageGalleryView />}
//        />
//        <Route
//         exact
//         path="/gallery/images/swimming-pool"
//         element={<ImageGalleryView />}
//        />
//       </Route>

//       <Route
//        exact
//        path="/wedding-event-planning"
//        element={
//         <React.Suspense fallback="Loading...">
//          <Event />
//         </React.Suspense>
//        }
//       />
//       <Route
//        exact
//        path="/rooms"
//        element={
//         <React.Suspense fallback="Loading...">
//          <Room />
//         </React.Suspense>
//        }
//       />
//       <Route
//        exact
//        path="/best-places-to-visit-in-sasan-gir"
//        element={
//         <React.Suspense fallback="Loading...">
//          <Experience />
//         </React.Suspense>
//        }
//       />
//       <Route
//        exact
//        path="/contact"
//        element={
//         <React.Suspense fallback="Loading...">
//          <Contact />
//         </React.Suspense>
//        }
//       />
//       <Route
//        exact
//        path="/blogs"
//        element={
//         <React.Suspense fallback="Loading...">
//          {" "}
//          <Blogs />{" "}
//         </React.Suspense>
//        }
//       />
//       <Route
//        exact
//        path="/places-to-visit-in-sasan-gir-wildlife-nature-heritage"
//        element={
//         <React.Suspense fallback="Loading...">
//          <Blog2 />
//         </React.Suspense>
//        }
//       />
//       <Route exact path="*" element={<NotFound />} />
//      </Routes>
//     </SmoothScroll>
//    </Box>
//   </BrowserRouter>
//  );
// };

// export default Router;
