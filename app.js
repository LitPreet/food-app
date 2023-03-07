import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './src/components/header';
import EmblaCarousel from './src/components/carousel';
const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const AppLayout = ()=>{
    return(
        <>
        <Header />
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
         </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)