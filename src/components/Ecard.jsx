import React from "react";
import { Card, CardHeader, CardMedia, Collapse, Box, IconButton, Divider,CardContent, CardActions, Typography, Button, useMediaQuery } from "@mui/material";
import { styled } from '@mui/system';
//import ReactGA from 'react-ga';

//const TRACKING_ID = "G-F89GGM6Z6K";
//ReactGA.initialize(TRACKING_ID);



export default function Ecard({ itineraries, activities }){

    const [expandedId, setExpandedId] = React.useState(0);

    const itinerariesPerCard = [{ _id: "1",
                                    Eimg:require("../images/events/wed.png"),
                                    event:"Wedding",
                                    desc:"Create cherished memories with a picture-perfect wedding at Shree Cottages. Our experienced team will ensure every detail is flawlessly executed, making your special day truly magical." 
                                }, 
                                { _id: "2",
                                    Eimg:require("../images/events/bday.png"),
                                    event:"Birthday Party",
                                    desc:"Celebrate your birthday party in style at Shree Cottages. From themed decorations to delectable treats, we'll create an unforgettable birthday experience tailored to your desires."
                                }, 
                                { _id: "3",
                                    Eimg:require("../images/events/corp.png"),
                                    event:"Corporate Event",
                                    desc:"Host a successful and productive corporate event at Shree Cottages. Our state-of-the-art facilities and professional services guarantee a seamless and memorable experience." 
                                },
                                {
                                    _id:"4",
                                    Eimg:require("../images/events/manag.png"),
                                    event:"Event Planning",
                                    desc:"Trust our expert event planners to bring your vision to life. Whether it's a grand gala or an intimate gathering, we will handle every aspect with precision and creativity, ensuring a remarkable event."
                                }
                            ];

    const handleExpandClick = i => {
        setExpandedId(expandedId === i ? 0 : i);

    };

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <Box {...other} ></Box>;
      })(({ theme, expand }) => ({
        flexDirection: !expand ? 'column-reverse' : 'row',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

    const isSame = i => {
        return (expandedId === i? true : false);
    }

    return(
        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" sx={{padding:{xs:"10vw 5vw",md:"5vw 10vw"}, backgroundColor: "common.white"}}>
        <Typography variant="h2">Want to Organize</Typography>
        <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:'1.1rem'}}/>
        <Box display='flex' sx={{alignItems: 'center', flexDirection:{xs:"column",md:"row"}}}>
        {itinerariesPerCard.map((itinerary, i) => (
        <Card key={itinerary._id} display="flex" style={{padding:isSmallScreen? isSame(i)?"":"2vw 1vw" :isSame(i)?"":"0vw 0vw 1vw 0vw", borderRadius:isSmallScreen?"10px":"20px", margin:"1vw",boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'}} >
            <ExpandMore
                expand={expandedId}
                aria-expanded={expandedId}
                aria-label="show more"
            >
            <Box onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i} 
            sx={{
              display:"flex",
              height:{xs:"100%",sm:"100%",md:"30vw",lg:"25vw"},
              width:{xs:"80vw",sm:"80vw",md:"100%"}, 
              flexDirection:{
                xs:isSame(i) ? "column" : "row", 
                sm:isSame(i) ? "column" : "row",
                md: isSame(i) ? "row" : "column-reverse"}}}>
              <Box sx={{width:{xs:isSame(i) ? "100%": "20%",sm:isSame(i) ? "100%": "20%",md:isSame(i) ? "60%" : "100%",lg:isSame(i) ? "55%" : "100%",xl:isSame(i) ? "60%" : "100%"}}}>
                <CardMedia component="img" src={itinerary.Eimg} alt="img" sx={{alignSelf:"center",clipPath:isSame(i) ? "": "circle(50%)", width:{xs:isSame(i) ? "100%" : "80%",sm:isSame(i) ? "100%" : "80%",md:isSame(i) ? "100%" : "60%"}, height:"100%",m: {xs:isSame(i)?"":"0vw",md:isSame(i) ? "" : "0vw 2vw" }}}/>
              </Box>
              {/* <CardHeader> */}
              <Box sx={{
                    display:"flex", 
                    flexDirection:{xs:isSame(i)?"column" :"row",md:isSame(i) ? "column" : "column-reverse"},
                    justifyContent:{xs:"center",sm:"center",md:isSame(i) ? "left" : "space-between"}, 
                    textAlign:{xs:"left",sm:"left",md:isSame(i) ? "left" : "center"}, 
                    width:{xs:isSame(i)? "100%" : "80%",sm:isSame(i)? "100%" : "80%",md:isSame(i) ? "40%" : "100%",lg:isSame(i) ? "45%" : "100%",xl:isSame(i) ? "40%" : "100%"},
                    m: isSame(i) ? "" : "",
                    p:{ xs:isSame(i) ? "1vw 5vw": "2vw",sm:isSame(i) ? "1vw 5vw": "2vw",md:isSame(i) ? "2vw 1vw" : "0vw",lg:isSame(i) ? "3vw 1.5vw" : "0vw"},
                    // overflowY:isSame(i)?"scroll":"clip",
                  }} >
                  <Typography variant="h4" sx={{
                                            textAlign:"left",
                                            alignSelf:"center",
                                            fontSize:{xs:"1.2rem",sm:"1.5rem",md:"1.75vw",lg:"1.7vw",xl:"1.6vw"},
                                            transform:{xs:"",sm:"",md:isSame(i) ? "" : "rotate(-90deg)"}, 
                                            m:{xs:isSame(i) ? "1vw 0vw 0vw 0vw" : "0px",md:isSame(i) ? "0px" : "5vw 0vw 8vw 0vw",lg:isSame(i) ? "0px" : "5vw 0vw 7vw 0vw"}, 
                                            width:isSame(i) ? "100%" : "150%"
                                          }}>{itinerary.event}</Typography>
                  {isSame(i) ?
                  <Box sx={{width:{xs:"10vw",sm:"7vw",md:"5vw"},alignSelf:"left",height:"2vw",backgroundImage:`url(${require(`../images/events/circle-arrow-${isSmallScreen?'r-small':'r'}.png`)})`, backgroundRepeat:"no-repeat",backgroundSize:"contain"}}></Box>
                  :<Box sx={{mb:{xs:"0vw",md:"1vw"},width:{xs:"25vw",sm:"20vw",md:"10vw"},alignSelf:"center",height:{xs:"4vw",sm:"3vw",md:"4vw",lg:"3vw"},backgroundImage:`url(${require(`../images/events/circle-arrow-${isSmallScreen?'r-small':'u'}.png`)})`, backgroundRepeat:"no-repeat",backgroundPosition:{xs:"center",md:"center top"},backgroundSize:"contain"}}></Box>}
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                      <CardContent sx={{p:'0',fontSize:{xs:"0.9rem",sm:"1rem",md:"1.1vw",lg:"1.1vw",xl:"1.1vw"}}}>
                          <div>{itinerary.desc}</div>
                      </CardContent>
                  </Collapse>
              </Box>
            {/* </CardHeader> */}
            {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}
            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            
          </CardActions> */}
          </Box>
          </ExpandMore>
        </Card>
      ))}
        </Box>
        </Box>
    );
}

//abcd