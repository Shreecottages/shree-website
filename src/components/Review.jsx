import React from "react";
import { Box, Typography, Divider, Button, Rating, Avatar } from "@mui/material";
import { Card, CardHeader,CardContent} from "@mui/material";
//import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/Homepage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Review(){

    const Creview = [
        {
          value: 5,
          description: `A very good place for wedding and other occasions planing good point is near by city so easy to get everything.`,
          prof: {
            img: 'C1.png',
            name: 'Jaydeep Purohit',
          }
        },
        {
            value: 5,
            description: `It was a splendid experience staying at Shree cottages. My friends and I were stayed there during our jungle safari and hiking in the Gir forest and the hospitality there was too worthy for staying.`,
            prof: {
                img: 'C2.png',
                name: 'khanjan joshi',
            }
        },
        {
            value: 5,
            description: `There is no need to explain this place into words without showing it. Marvelous place for any functions like engagement, marriage. There staying cottages are so huge, clean with all facilities`,
            prof: {
                img: 'C3.png',
                name: 'mitali vyas',
            }
        },
        {
            value: 5,
            description: `Clean and spacious Rooms and surrounding(maintained lawn) and alot of parking place, sweeming pool is clean and maintain, but few lights are not working around sweeming pool. Somnath temple and Sasan...`,
            prof: {
                img: 'C4.png',
                name: 'Nilesh Shirke',
            }
        },
        {
            value: 5,
            description: `Great experience wedding function at this place.... Great atmosphere`,
            prof: {
                img: 'C5.png',
                name: 'hirpara amit',
            }
        },
        {
            value: 5,
            description: `Place is very cool. Very specious, a big parking area, children play area, swimming pool, big garden area.Also they arrange cultural activities in night at complimentary.`,
            prof: {
                img: 'C6.png',
                name: 'Varun Joshi',
            }
        },
        {
            value: 5,
            description: `It's very reasonable to stay near somnath temple. Almost 15 km only from somnath temple. It's not a resort but kind of party plot for functions. But stay is good as per price.`,
            prof: {
                img: 'C7.png',
                name: 'Dr Monica Patel',
            }
        },
        {
            value: 5,
            description: `Excellent place to arrange your function…humble staff….nice service….overall great experience….:)`,
            prof: {
                img: 'C8.png',
                name: 'Fenil Kaneriya',
            }
        },
        {
            value: 5,
            description: `Very good party plot. Nice lawn, very good rooms and ample space. It is very clean and well maintained place. An ideal place for engagement, marriage and these kind of ceremonies.`,
            prof: {
                img: 'C9.png',
                name: 'Nilesh Rathod',
            }
        },
      ];

    const [activeIndex, setActiveIndex] = React.useState(0);
    const maxIndex = Creview.length;
    const cslide = 1; 

    const settings = {
        responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
               slidesToShow: 1,
              }
             }
          ],        
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        useCSS: true,
        useTransform: true,
        // afterChange: index => this.setCslide({cslide: index}),
        dots: true,
        autoPlay: true,
        autoplaySpeed: 1000,
        initialSlide: 0,
        // appendDots: dots => (
        //     <div className="slick-dots">
        //         <ul style={{ margin: "0px" }}> {dots} </ul>
        //     </div>
        // )
        // variableWidth: true
        // slidesPerRow: 1
      };

      
    return(
        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" sx={{padding:{xs:"10vw 5vw",md:"5vw 0vw"}, backgroundColor: "common.white"}}>
        <Typography variant="h2" sx={{p:"0vw 10vw"}}>What our Customers Say</Typography>
        <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:'1.1rem'}}/>
        <Box display='flex' flexDirection="column" sx={{alignItems: 'center'}}>
            <Box className="cards-container" sx={{display:"flex", flexDirection:"row", width:"100%"}}>
            {/* <Carousel styled={{width:"100%", display:"flex", flexDirection:"row"}} swipe="true" stopAutoPlayOnHover="true" > */}
            <Slider {...settings}>
                {Creview.map((card) => {
                   return(
                    <Card className="card" raised={0}  sx={{backgroundColor:"rgba(255, 187, 112, 0.1);",borderRadius:"20px", textAlign:"left", p:"2vw", height:{xs:"20rem",md:"20rem"}, display: "flex", flexDirection:"column", justifyContent:"space-between"}} >
                        <CardContent>
                            <Rating name="read-only" value={card.value} readOnly sx={{cursor:"default"}} />
                            <Typography variant="body2" sx={{fontSize:"1rem",display:"flex", height:{xs:"10rem",md:"15rem"}}}>{card.description}</Typography>
                        </CardContent>
                        <CardHeader
                            avatar={
                                <Avatar src={require(`../images/Prof/${card.prof.img}`)} sx={{width:"4rem",height:"100%"}}/>
                            }
                            title={card.prof.name}
                            titleTypographyProps={{variant:'h6', fontSize:"1rem", fontWeight:"bold" }}
                            sx={{position:"absolute", bottom:"0",mb:"1vw"}}
                        />
                    </Card>
                    )
                })}
            </Slider> 
                {/* </Carousel> */}
            </Box>
            {/* <MobileStepper
                        variant="dots"
                        steps={maxIndex}
                        position="static"
                        activeStep={cslide}
                        sx={{
                            background: 'none',
                            justifyContent: 'center',
                            m:"1vw 0vw 2vw 0vw"
                        }}      
                    /> */}
                <Button variant="outlined" onClick={()=> window.open("https://search.google.com/local/writereview?placeid=ChIJ0fEovSfK4jsRxrcm9yXgCeY&source=g.page.m.rc._&laa=merchant-web-dashboard-card", "_blank")}>Write a Review <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}} /></Button>
        </Box>
        
        </Box>
    );
}

