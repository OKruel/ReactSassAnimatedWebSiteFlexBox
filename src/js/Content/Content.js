import React from 'react';

import Navigation from './Navigation';
import Main from './Main';

const Content = props => (
    <div className='content'>
        <Navigation></Navigation>
        <Main></Main>
    </div>
)

export default Content;