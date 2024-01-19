import React, { FC } from 'react';
import styles from './ThirdTask.module.scss';

export type ThirdTaskProps = {};

const ThirdTask: FC<ThirdTaskProps> = (props) => {
  return (
    <div className={styles.root} {...props}>
      ThirdTask component is mounted!
    </div>
  );
};

export default ThirdTask;
