import React, { FC, useCallback, useEffect, useReducer } from 'react';
import styles from './Service.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { servicesActions } from '@bus/services/actions';
import {
  getCurrentServiceData,
  getCurrentServiceError,
  getCurrentServiceLoading,
} from '@bus/services/selectors';

export type ServiceProps = {};

const Service: FC<ServiceProps> = () => {
  const data = useSelector(getCurrentServiceData);
  const loading = useSelector(getCurrentServiceLoading);
  const error = useSelector(getCurrentServiceError);
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const [update, setUpdate] = useReducer((c) => c + 1, 1);

  useEffect(() => {
    if (id) dispatch(servicesActions.fetchCurrentServiceAsync(id));
  }, [id, update]);

  const onRefreshHandler = useCallback(() => {
    setUpdate();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.help}>
        Кнопка обновления чтобы ошибку легче было поймать
        <button onClick={onRefreshHandler} className={styles.button}>
          Повторить запрос
        </button>
      </div>

      {loading && <div>Loading...</div>}

      {error && !loading && (
        <div className={styles.error}>
          Произошла ошибка!
          <button onClick={onRefreshHandler} className={styles.button}>
            Повторить запрос
          </button>
        </div>
      )}

      {data && !loading && (
        <div>
          <div>{data.id}</div>
          <div>{data.name}</div>
          <div>{data.price}</div>
        </div>
      )}
    </div>
  );
};

export default Service;
