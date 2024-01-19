import React, { FC } from 'react';
import styles from './FirstTask.module.scss';

export type FirstTaskProps = {};

const FirstTask: FC<FirstTaskProps> = (props) => {
  return (
    <div className={styles.root} {...props}>
      FirstTask component is mounted!
    </div>
  );
};

export default FirstTask;
