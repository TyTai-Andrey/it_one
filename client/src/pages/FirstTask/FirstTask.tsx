import React, { FC, useCallback, useState } from 'react';
import styles from './FirstTask.module.scss';
import { fill, map } from 'lodash';
import { Card } from '@components/Card';
import { Button } from 'antd';

export type FirstTaskProps = {};

export type CardModel = {
  header: string;
  options: string[];
  text: string;
};

const createCard = (id: number) => ({
  header: `Заголовок ${id}`,
  options: map(fill(new Array(3), ''), (_, idx) => `элемент списка ${idx + 1}`),
  text: map(
    fill(new Array(3), ''),
    (_, idx) => `какой-то текст ${idx + 1}`,
  ).join(' '),
});

const FirstTask: FC<FirstTaskProps> = () => {
  const [cards, setCards] = useState<CardModel[]>(() =>
    map(fill(new Array(3), ''), (_, idx) => createCard(idx + 1)),
  );

  const addCard = useCallback(() => {
    setCards((prev) => [...prev, createCard(prev.length + 1)]);
  }, []);

  const removeLastCard = useCallback(() => {
    setCards((prev) => [...prev.slice(0, prev.length - 1)]);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <Button onClick={addCard}>Добавить ещё</Button>
        <Button onClick={removeLastCard} disabled={!cards.length}>
          Удалить последнюю
        </Button>
      </div>
      <div className={styles.cards}>
        {map(cards, (i) => (
          <Card key={i.header} {...i} />
        ))}
      </div>
    </div>
  );
};

export default FirstTask;
