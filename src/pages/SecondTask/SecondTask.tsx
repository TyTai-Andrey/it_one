import React, { FC } from 'react';
import styles from './SecondTask.module.scss';

export type SecondTaskProps = {};

const SecondTask: FC<SecondTaskProps> = (props) => {
  return (
    <div className={styles.root} {...props}>
      SecondTask component is mounted!
    </div>
  );
};

export default SecondTask;
