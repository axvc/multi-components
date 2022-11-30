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
    <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://multicomponents.vercel.app/" />
    <meta
      property="og:image"
      content="https://multicomponents.vercel.app/main-page.png"
    />
    <meta
      property="og:image:secure_url"
      content="https://multicomponents.vercel.app/main-page.png"
    />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:image:alt" content="Screenshot" />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="icon" href="https://multicomponents.vercel.app/favicon.ico" />
    <link
      rel="preload"
      as="image"
      href="https://multicomponents.vercel.app/main-page.png"
    />
  </Head>
);

export default MainHead;
