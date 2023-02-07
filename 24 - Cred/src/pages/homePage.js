import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase'
import Feelspecial from '../components/FeelSpecial';
import BrandsLove from '../components/BrandsLove';
import CredExperience from '../components/CredExperience';
import MobileScroll from '../components/MobileScroll';
import WindowPeak from '../components/WindowPeak';
import CredSecurity from '../components/CredSecurity';
import CredStory from '../components/CredStory';
import AppRating from '../components/AppRating';
import Footer from '../components/Footer';
const HomePage = () => {
    return (
    <>
    <Header />
    <HeroSection />   
    <ProductShowcase />
    <Feelspecial />
    <BrandsLove />
    <CredExperience />
    <MobileScroll />
    <div className='non-mobile'>
    <WindowPeak />
    </div>
    <CredSecurity />
    <CredStory />
    <AppRating />
    <Footer />
    </>
    );
}

export default HomePage;