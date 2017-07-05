import React from 'react';
import ReactDom from 'react-dom';
import  Application from './routers/routers';


const mountApp = document.getElementById('root');

ReactDom.render(
    <Application />,
    mountApp
);

