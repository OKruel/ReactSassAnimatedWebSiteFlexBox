import React from 'react';

import Header from './Header';
import Content from './Content/Content';

const Layout = props => (
    <div className='container'>
        <Header />
        <Content />
    </div>
)

export default Layout;