import React from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import Navbar from './../Common/Navbar/Navbar';
import TopLoader from './../Common/ui/TopLoader';
import Home from './../Components/Home/Home';
import NotFound from '../Common/NotFound/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <Navbar />
        <TopLoader>
            <Route path='' element={<Home />} />
            <Route path='404' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/404' />} />
        </TopLoader>
    </BrowserRouter >
);

export default AppRouter;
