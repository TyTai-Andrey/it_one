import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { Header } from '@components/Header';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.root}>{children}</div>
    </>
  );
};
