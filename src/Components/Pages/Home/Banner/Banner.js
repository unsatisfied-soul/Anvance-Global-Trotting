import React from 'react';
import TweenOne from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";

import "rc-banner-anim/assets/index.css";

import './Banner.css'
const BgElement = Element.BgElement;


const Banner = () => {
  return (
    <BannerAnim prefixCls="banner-user" 
      autoPlay
      autoPlaySpeed={1000}
      duration={700}
      delay={3000}
      autoPlayEffect={false}
    >
    <Element prefixCls="banner-user-elem" key="0">
      <BgElement
        key="bg"
        className="bg"
        style={{
          backgroundImage: 'url(https://i.ibb.co/6Jdf5Bg/maxresdefault-1.jpg)'
        }}
      />
      <TweenOne
        className="banner-user-title mb-4"
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <h2 className='text-8xl'>Trouble shared is trouble halved.</h2>
      </TweenOne>
    
    </Element>
    <Element prefixCls="banner-user-elem" key="1">
      <BgElement
        key="bg"
        className="bg"
        style={{
          backgroundImage: 'url(https://i.ibb.co/Fh02KH2/50-509325-gwalior-fort-1.jpg)'
        }}
      />
      <TweenOne
        className="banner-user-title mb-4"
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <h2 className='text-7xl'>Life is funny. If you don't laugh, you're in trouble.</h2>
      </TweenOne>
      
    </Element>
    <Element prefixCls="banner-user-elem" key="2">
      <BgElement
        key="bg"
        className="bg"
        style={{
          backgroundImage: 'url(https://i.ibb.co/rtKVyPf/18007-02-1.jpg)'
        }}
      />
      <TweenOne
        className="banner-user-title mb-4"
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <h2 className='text-8xl'>The trouble with law is lawyers.</h2> 
      </TweenOne>
    </Element>
  </BannerAnim>
  );
};

export default Banner;