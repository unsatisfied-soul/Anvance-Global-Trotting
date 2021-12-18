import React from 'react';
import Packages from '../Packages/Packages';
import Banner from './Banner/Banner';
import Header from './Header/Header';

const Home = () => {
    return (
        <>
          <Header />  
          <Banner />
          <Packages/>
        </>
    );
};

export default Home;