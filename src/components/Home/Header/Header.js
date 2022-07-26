import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';

const Header = () => {
    return (
        <div id='home'>
            <Navigationbar />
            <HeaderMain />
        </div>
    );
};

export default Header;