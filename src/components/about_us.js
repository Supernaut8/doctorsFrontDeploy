// import React, { useState } from "react";
import "../styles/about_us.css"
// import Typography from '@mui/material/Typography';

const AboutUs= () => {
    return (
        // <div className="nav_container">
        //     <Typography variant="h2"
        //         noWrap
        //         component="a"
        //         href="/"
        //         sx={{
        //             mr: 2,
        //             display: { xs: 'none', md: 'flex' },
        //             fontFamily: 'rubik',
        //             fontSize: '30px',
        //             fontWeight: 70,
        //             letterSpacing: '.3rem',
        //             color: 'inherit',
        //             textDecoration: 'none',
        //         }}
        //     >
        //        About us ----- Sitio en construcción
        //     </Typography>
        // </div>
        <>
      <div className="container_about">
         <div className="main_about">
            <div className="mission">
               <h1 className="title_div">Mission</h1>
               <p>Our mission is to provide quick, convenient, and high-quality access to medical services through our online platform. We are committed to improving the health and well-being of individuals by offering affordable and personalized healthcare, delivering exceptional service tailored to the individual needs of each patient.</p>
            </div>

            <div className="vision">
               <h1 className="title_div">Vision</h1>
               <p>Our vision is to be leaders in the revolution of online healthcare, making top-tier medical services easily accessible at any time and place. We aspire to be the preferred choice for people's healthcare needs, offering comprehensive and effective solutions through our innovative web platform.</p>
            </div>
            <div className="values">
               <h1 className="title_div">Values</h1>
               <ul >
                  <li><strong>Quality:</strong> Ensuring each patient receives the best possible care.</li>
                  <li><strong>Accessibility:</strong> Guaranteeing affordable and available healthcare for everyone.</li>
                  <li><strong>Empathy:</strong> Showing compassion and support to every patient.</li>
                  <li><strong>Innovation:</strong> Elevating healthcare to new heights through constant innovation.</li>
                  <li><strong>Integrity:</strong> Acting with transparency, safeguarding privacy and confidentiality.</li>
                  <li><strong>Collaboration:</strong> Working together with healthcare professionals and patients.</li>
                  <li><strong>Community Contribution:</strong> Promoting awareness and education about health-related issues.</li>
               </ul>
            </div>
         </div>

      </div>
   </>
    )
}

export default AboutUs;