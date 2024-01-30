import React, { FC } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { pathnames } from '@routes/App/utils';
import classNames from 'classnames';
import { Layout, Menu } from 'antd';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const getClassNameForNavLink = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, {
      [styles.isActive]: isActive,
    });

  return (
    <Layout.Header className={styles.root}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to={pathnames.firstTask}
              className={getClassNameForNavLink}
            >
              Первое задание
            </NavLink>
          </li>
          <li>
            <NavLink
              to={pathnames.secondTask}
              className={getClassNameForNavLink}
            >
              Второе задание
            </NavLink>
          </li>
          <li>
            <NavLink
              to={pathnames.thirdTask}
              className={getClassNameForNavLink}
            >
              Третье задание
            </NavLink>
          </li>
        </ul>
      </nav>
    </Layout.Header>
  );
};
