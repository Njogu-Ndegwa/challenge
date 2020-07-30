import React from 'react';
import Header from './header';
import Footer from './footer';
import Loading from './loading';
import Error from './error';

export default function Layout ({content, loading, error, title}) {
    return (
        <>
        <Header titles={title} />
        {error ? <Error/> : ''}
        {loading? <Loading /> : ''}
        {content}
        <Footer />
        </>
    )
}