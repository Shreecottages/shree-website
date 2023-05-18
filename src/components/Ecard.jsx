import React from "react";
import { Card, CardHeader, CardMedia, Collapse, Box, IconButton, Divider,CardContent, CardActions, Typography, Button, useMediaQuery } from "@mui/material";
import { styled } from '@mui/system';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';



export default function Ecard({ itineraries, activities }){

    const [expandedId, setExpandedId] = React.useState(0);

    const itinerariesPerCard = [{ _id: "1",
                                    Eimg:"wed.png",
                                    event:"Wedding",
                                    desc:"Marriages they say are made in heaven. That's why, we do everything we can to make your special day truly heavenly for you and your loved ones. It's certainly the perfect wedding destination." 
                                }, 
                                { _id: "2",
                                    Eimg:"bday.png",
                                    event:"Birthday Party",
                                    desc:"Marriages they say are made in heaven. That's why, we do everything we can to make your special day truly heavenly for you and your loved ones. It's certainly the perfect wedding destination."
                                }, 
                                { _id: "3",
                                    Eimg:"corp.png",
                                    event:"Corperate Event",
                                    desc:"Marriages they say are made in heaven. That's why, we do everything we can to make your special day truly heavenly for you and your loved ones. It's certainly the perfect wedding destination." 
                            
                                },
                                {
                                    _id:"4",
                                    Eimg:"manag.png",
                                    event:"Event Planning",
                                    desc:"Marriages they say are made in heaven. That's why, we do everything we can to make your special day truly heavenly for you and your loved ones. It's certainly the perfect wedding destination."
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
        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" sx={{padding:"5vw 10vw", backgroundColor: "common.white"}}>
        <Typography variant="h2">Want to Organize</Typography>
        <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:'1.1rem'}}/>
        <Box display='flex' sx={{alignItems: 'center', flexDirection:{xs:"column",sm:"column",md:"row"}}}>
        {itinerariesPerCard.map((itinerary, i) => (
        <Card key={itinerary._id} display="flex" style={{padding:isSmallScreen? isSame(i)?"":"1vw" :isSame(i)?"":"0vw 0vw 1vw 0vw", borderRadius:"20px", margin:"1vw",boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)'}} >
            <ExpandMore
                expand={expandedId}
                aria-expanded={expandedId}
                aria-label="show more"
            >
            <Box onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i} 
            sx={{display:"flex",height:{xs:"100%",sm:"100%",md:"30vw",lg:"25vw"},width:{xs:"80vw",sm:"80vw",md:"100%"}, flexDirection:{xs:isSame(i) ? "column" : "row", sm:isSame(i) ? "column" : "row",md: isSame(i) ? "row" : "column-reverse"}}}>
              <Box sx={{width:{xs:isSame(i) ? "100%": "20%",sm:isSame(i) ? "100%": "20%",md:isSame(i) ? "60%" : "100%",lg:isSame(i) ? "55%" : "100%",xl:isSame(i) ? "60%" : "100%"}}}>
                <CardMedia component="img" src={`../images/events/${itinerary.Eimg}`} alt="img" sx={{clipPath:isSame(i) ? "": "circle(50%)", width:{xs:isSame(i) ? "100%" : "101%",sm:isSame(i) ? "100%" : "101%",md:isSame(i) ? "100%" : "60%"}, height:"100%",m: {xs:isSame(i)?"":"0vw",sm:isSame(i)?"":"0vw",md:isSame(i) ? "" : "0vw 2vw" }}}/>
              </Box>
              {/* <CardHeader> */}
              <Box sx={{
                    display:"flex", 
                    flexDirection:{xs:"column",sm:"column",md:isSame(i) ? "column" : "column-reverse"},
                    justifyContent:{xs:"center",sm:"center",md:isSame(i) ? "left" : "space-between"}, 
                    textAlign:{xs:"left",sm:"left",md:isSame(i) ? "left" : "center"}, 
                    width:{xs:isSame(i)? "100%" : "80%",sm:isSame(i)? "100%" : "80%",md:isSame(i) ? "40%" : "100%",lg:isSame(i) ? "45%" : "100%",xl:isSame(i) ? "40%" : "100%"},
                    m: isSame(i) ? "" : "",
                    p:{ xs:isSame(i) ? "1vw 5vw": "2vw",sm:isSame(i) ? "1vw 5vw": "2vw",md:isSame(i) ? "2vw 1vw" : "0vw",lg:isSame(i) ? "3vw 1.5vw" : "0vw"},
                    // overflowY:isSame(i)?"scroll":"clip",
                  }} >
                  <Typography variant="h4" sx={{
                                            fontSize:{xs:"1.5rem",sm:"1.5rem",md:"1.7vw",lg:"1.7vw",xl:"1.7rem"},
                                            transform:{xs:"",sm:"",md:isSame(i) ? "" : "rotate(-90deg)"}, 
                                            m:{xs:isSame(i) ? "0vw" : "",sm:isSame(i) ? "0vw" : "",md:isSame(i) ? "" : "5vw 0vw 6vw -2.5vw"}, 
                                            width:isSame(i) ? "100%" : "150%"
                                          }}>{itinerary.event}</Typography>
                  <Box sx={{mt:isSame(i)?"-1rem":""}}><img src={`../images/events/circle-arrow-${isSmallScreen?'r':isSame(i)? 'r' : 'u'}.png`} style={{width:isSmallScreen?isSame(i)?"15%":"20%":isSame(i)?"35%":"",height:isSmallScreen?isSame(i)?"30%":"20%":isSame(i)?"":"75%"}} /></Box>
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                      <CardContent sx={{p:'0',fontSize:{xs:"1rem",sm:"1rem",md:"1.1vw",lg:"1.1vw",xl:"1.2rem"}}}>
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