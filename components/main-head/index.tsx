import Head from 'next/head';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const MainHead: FC<Props> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://ibb.co/qF3xs2z" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default MainHead;
