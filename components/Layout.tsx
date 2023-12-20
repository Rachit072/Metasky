import React,{ ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
