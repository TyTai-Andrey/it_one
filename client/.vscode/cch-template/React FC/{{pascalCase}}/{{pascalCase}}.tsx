import React, { FC } from 'react';
import styles from './{{pascalCase}}.module.scss'

export type {{pascalCase}}Props = {

}

export const {{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
  return <div className={styles.root} {...props}>
    {{pascalCase}} component is mounted!
  </div>;
};