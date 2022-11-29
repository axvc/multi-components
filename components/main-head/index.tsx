import Head from 'next/head';
import { FC } from 'react';

const MainHead: FC = () => (
  <Head>
    <title>Multi components</title>
    <meta name="description" content="Three ui components" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'1'} />
    <link
      href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default MainHead;
