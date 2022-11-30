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
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default MainHead;
