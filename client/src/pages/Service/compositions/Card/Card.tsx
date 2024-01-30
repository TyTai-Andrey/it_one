import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentServiceData,
  getCurrentServiceError,
  getCurrentServiceLoading,
} from '@bus/services/selectors';
import styles from './Card.module.scss';
import { servicesActions } from '@bus/services/actions';
import { pathnames } from '@routes/App/utils';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Card as CardUI } from 'antd';

export type CardProps = {
  id?: string;
  onEditStartHandler: () => void;
};

export const Card: FC<CardProps> = ({ id, onEditStartHandler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getCurrentServiceData);
  const loading = useSelector(getCurrentServiceLoading);
  const error = useSelector(getCurrentServiceError);

  const onDeleteHandler = useCallback(() => {
    if (id)
      dispatch(
        servicesActions.fetchDeleteCurrentServiceAsync({
          id,
          onSuccess: () => {
            navigate(pathnames.secondTask);
          },
          onError: () => {
            console.log('error');
          },
        }),
      );
  }, [id]);

  return (
    <>
      {data && !loading && !error && (
        <Space direction="vertical">
          <CardUI>
            <Space direction="vertical">
              <div>{data.id}</div>
              <div>{data.name}</div>
              <div>{data.price}</div>
              <div>{data.content}</div>
            </Space>
          </CardUI>

          <Space>
            <Button onClick={onDeleteHandler}>Удалить</Button>
            <Button onClick={onEditStartHandler} type="primary">
              Начать редактировать
            </Button>
          </Space>
        </Space>
      )}
    </>
  );
};
