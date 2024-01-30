import React, { FC, useCallback, useEffect, useReducer } from 'react';
import styles from './SecondTask.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { servicesActions } from '@bus/services/actions';
import {
  getServicesData,
  getServicesError,
  getServicesLoading,
} from '@bus/services/selectors';
import { Link } from 'react-router-dom';
import { ErrorButton } from '@components/ErrorButton';
import { List } from 'antd';

export type SecondTaskProps = {};

const SecondTask: FC<SecondTaskProps> = () => {
  const data = useSelector(getServicesData);
  const loading = useSelector(getServicesLoading);
  const error = useSelector(getServicesError);
  const dispatch = useDispatch();
  const [update, setUpdate] = useReducer((c) => c + 1, 1);

  useEffect(() => {
    dispatch(servicesActions.fetchServicesAsync());
  }, [update]);

  const onRefreshHandler = useCallback(() => {
    setUpdate();
  }, []);

  return (
    <div className={styles.root}>
      {loading && <div>Loading...</div>}

      {error && !loading && <ErrorButton onClick={onRefreshHandler} />}

      {data && !loading && (
        <List
          className={styles.list}
          dataSource={data}
          renderItem={(i) => (
            <List.Item key={i.id}>
              <Link to={`/services/${i.id}/details`}>
                <span>{i.name}</span>
                <span>{i.price}</span>
              </Link>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default SecondTask;
