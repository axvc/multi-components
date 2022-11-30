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
    <meta property="og:image:secure_url" content="https://ibb.co/qF3xs2z" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:title" content={title} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default MainHead;
