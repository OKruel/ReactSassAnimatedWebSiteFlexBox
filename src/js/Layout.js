import React from 'react';

import Header from './Header';
import Content from './Content/Content';

const Layout = props => (
    <div className='container'>
        <Header></Header>
        <Content></Content>
    </div>
)

export default Layout;