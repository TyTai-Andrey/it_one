import React, { FC } from 'react';
import styles from './Card.module.scss';
import { CardModel } from '@pages/FirstTask/FirstTask';
import { map } from 'lodash';

export interface CardProps extends CardModel {}

export const Card: FC<CardProps> = ({ header, options, text }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>{header}</h1>
      <ul className={styles.options}>
        {map(options, (i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
