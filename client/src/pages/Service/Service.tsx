import React, { FC, useCallback, useEffect, useReducer, useState } from 'react';
import styles from './Service.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { servicesActions } from '@bus/services/actions';
import {
  getCurrentServiceData,
  getCurrentServiceError,
  getCurrentServiceLoading,
} from '@bus/services/selectors';
import { ErrorButton } from '@components/ErrorButton';
import { Card } from './compositions/Card';
import { EditCard } from './compositions/EditCard';
import { Button, Space as SpaceUI } from 'antd';
import styled from 'styled-components';

export type ServiceProps = {};

const Space = styled(SpaceUI)({
  display: 'flex',
});

const Service: FC<ServiceProps> = () => {
  const dispatch = useDispatch();

  const data = useSelector(getCurrentServiceData);
  const loading = useSelector(getCurrentServiceLoading);
  const error = useSelector(getCurrentServiceError);

  const { id } = useParams<{ id: string }>();

  const [values, setValues] = useState(data);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useReducer((c) => c + 1, 1);

  useEffect(() => {
    if (id) dispatch(servicesActions.fetchCurrentServiceAsync(id));
  }, [id, update]);

  const onEditStopHandler = useCallback(() => {
    setEdit(false);
    setValues(null);
  }, []);

  const onEditHandler = useCallback(() => {
    if (values?.id)
      dispatch(
        servicesActions.fetchEditCurrentServiceAsync({
          body: values,
          onSuccess: (data) => {
            console.log(data);

            setValues(data);
          },
        }),
      );
  }, [values]);

  const onRefreshHandler = useCallback(() => {
    edit ? onEditHandler() : setUpdate();
  }, [edit, onEditHandler]);

  const onEditStartHandler = useCallback(() => {
    setEdit(true);
    setValues(data);
  }, [data]);

  return (
    <div className={styles.root}>
      {!edit && (
        <Space>
          Кнопка обновления чтобы ошибку легче было поймать
          <Button onClick={onRefreshHandler} className={styles.button}>
            Повторить запрос
          </Button>
        </Space>
      )}
      {loading && <div>Loading...</div>}
      {error && !loading && <ErrorButton onClick={onRefreshHandler} />}
      {!edit && <Card id={id} onEditStartHandler={onEditStartHandler} />}

      {edit && (
        <EditCard
          values={values}
          setValues={setValues}
          onEditStopHandler={onEditStopHandler}
          onEditHandler={onEditHandler}
        />
      )}
    </div>
  );
};

export default Service;
