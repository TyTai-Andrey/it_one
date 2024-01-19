import React, { FC } from 'react';
import styles from './Main.module.scss';
import { params, model } from './Main.utils';

type MainProps = {};

const Main: FC<MainProps> = () => {
  return <div className={styles.root}></div>;
};

export default Main;
