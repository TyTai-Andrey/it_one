import React, { FC, useCallback } from 'react';
import styles from './EditCard.module.scss';
import { ServiceModel } from '@bus/services/interfaces';
import { useSelector } from 'react-redux';
import { getCurrentServiceLoading } from '@bus/services/selectors';
import { Button, Card, Input, Space } from 'antd';

export type EditCardProps = {
  values: ServiceModel | null;
  onEditStopHandler: () => void;
  onEditHandler: () => void;
  setValues: React.Dispatch<React.SetStateAction<ServiceModel | null>>;
};

export const EditCard: FC<EditCardProps> = ({
  values,
  setValues,
  onEditHandler,
  onEditStopHandler,
}) => {
  const loading = useSelector(getCurrentServiceLoading);

  const onChangeInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({
        ...(prev as ServiceModel),
        [e.target.name as keyof ServiceModel]: e.target.value,
      }));
    },
    [],
  );

  return (
    <>
      {values && !loading && (
        <Space direction="vertical">
          <Card>
            <Space direction="vertical">
              <div>{values.id}</div>
              <Input
                name="name"
                value={values.name}
                onChange={onChangeInputHandler}
                className={styles.input}
              />
              <Input
                name="price"
                value={values.price}
                onChange={onChangeInputHandler}
                className={styles.input}
              />
              <Input
                name="content"
                value={values.content}
                onChange={onChangeInputHandler}
                className={styles.input}
              />
            </Space>
          </Card>

          <Space>
            <Button onClick={onEditStopHandler}>Назад</Button>
            <Button type="primary" onClick={onEditHandler}>
              Отправить
            </Button>
          </Space>
        </Space>
      )}
    </>
  );
};
