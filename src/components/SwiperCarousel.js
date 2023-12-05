// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from '@mui/material';
import 'swiper/css';
import '../styles/SwiperCarousel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../images/centro-medico1.jpg';
import img2 from '../images/centro-medico2.jpg';
import img3 from '../images/centro-medico3.jpg';
import img4 from '../images/centro-medico4.jpg';
import img5 from '../images/centro-medico5.png';
import img6 from '../images/centro-medico6.png';
import img7 from '../images/centro-medico7.jpg';
import img8 from '../images/centro-medico8.jpg';
import img9 from '../images/centro-medico9.png';
import img10 from '../images/centro-medico10.png';
import img11 from '../images/centro-medico11.png';
import img12 from '../images/centro-medico12.png';


export default function SwiperCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2650,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Grid container>
                        <Grid item sm={3} xl={3}>
                            <img src={img1} alt='imagen de {img1}' />
                        </Grid>
                        <Grid item sm={3} xl={3}>
                            <img src={img2} alt='imagen de {img2}' />
                        </Grid>
                        <Grid item sm={3} xl={3}>
                            <img src={img3} alt='imagen de {img3}' />
                        </Grid>
                        <Grid item sm={3} xl={3}>
                            <img src={img4} alt='imagen de {img4}' />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container>
                        <Grid item sm={3} xl={3}>
                            <img src={img5} alt='imagen de {img5}' />
                        </Grid>
                        <Grid item sm={3} xl={3}>
                            <img src={img6} alt='imagen de {img6}' />
                        </Grid>
                        <Grid item sm={3} xl={3}>
                            <img src={img7} alt='imagen de {img7}' />
                        </Grid>
                        <Grid item sm={3} xl={3}>
                            <img src={img8} alt='imagen de {img8}' />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Grid container>
                        <Grid item sm={3} lg={3}>
                            <img src={img9} alt='imagen de {img9}' />
                        </Grid>
                        <Grid item sm={3} lg={3}>
                            <img src={img10} alt='imagen de {img10}' />
                        </Grid>
                        <Grid item sm={3} lg={3}>
                            <img src={img11} alt='imagen de {img11}' />
                        </Grid>
                        <Grid item sm={3} lg={3}>
                            <img src={img12} alt='imagen de {img12}' />
                        </Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </>
    );
}