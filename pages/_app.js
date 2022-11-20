import React from 'react'
import Head from 'next/head'
import {SSRProvider} from '@react-aria/ssr'; 
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>  <title>My App</title> </Head>
      <SSRProvider><SessionProvider session={pageProps.session}><Component {...pageProps} /></SessionProvider>  </SSRProvider>
    </>
  ) 
}

export default MyApp
