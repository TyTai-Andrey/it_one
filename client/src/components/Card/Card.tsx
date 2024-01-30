import React, { FC } from 'react';
import styles from './Card.module.scss';
import { CardModel } from '@pages/FirstTask/FirstTask';
import { Card as CardUI, List } from 'antd';
import styled from 'styled-components';

export interface CardProps extends CardModel {}

const StyledCard = styled(CardUI)({
  ['.ant-card-body']: {
    padding: 0,
  },
});

export const Card: FC<CardProps> = ({ header, options, text }) => {
  return (
    <StyledCard title={header} className={styles.root}>
      <List
        className={styles.options}
        dataSource={options}
        renderItem={(item) => <List.Item key={item}>{item}</List.Item>}
      />
      <p className={styles.text}>{text}</p>
    </StyledCard>
  );
};
