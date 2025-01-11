import React from 'react'
import Footer from './Footer';
import Header from './Header';

function Layout({
       children,
     }: Readonly<{
       children: React.ReactNode;
     }>) {
  return (
    <div className='max-w-screen-2xl mx-auto overscroll-none overflow-hidden'>
       <Header/>
       <main className='  max-lg:p-0 w-full bg-white'>{children}</main>
       <Footer/>
    </div>
  )
}

export default Layout