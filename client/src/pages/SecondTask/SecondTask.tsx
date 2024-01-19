import React, { FC, useEffect } from 'react';
import styles from './SecondTask.module.scss';

export type SecondTaskProps = {};

const SecondTask: FC<SecondTaskProps> = (props) => {
  useEffect(() => {
    //check
    fetch('http://localhost:7070/api/services');
  }, []);

  return (
    <div className={styles.root} {...props}>
      SecondTask component is mounted!
    </div>
  );
};

export default SecondTask;
