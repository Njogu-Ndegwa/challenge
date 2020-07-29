import React from 'react';
import Header from './header';
import Footer from './footer';
import Loading from './loading';
import Error from './error';

export default function Layout ({content, loading, error}) {
    return (
        <>
        <Header />
        {error ? <Error/> : ''}
        {loading? <Loading /> : ''}
        {content}
        <Footer />
        </>
    )
}