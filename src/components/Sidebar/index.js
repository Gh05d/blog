import React from 'react';
import LazyLoad from 'react-lazyload';

import './index.scss';

const Sidebar = ({ post = false }) => (
  <header className={`
    intro-header
    col-lg-2
    col-xs-12
    order-lg-1
    ${post === true ? 'order-md-10 order-10' : 'order-1'}
    `}
  >
    <div className="site-heading text-center">
      <div className="about-me">
        <LazyLoad height={200}>
          <img
            className="avatar"
            src="https://calpa.me/img/profile.png"
            alt="Calpa"
          />
        </LazyLoad>
        <h4>Calpa</h4>
        <p>夢裡不覺秋已深</p>
        <p>餘情豈是為他人</p>
      </div>
    </div>
  </header>
);

export default Sidebar;
