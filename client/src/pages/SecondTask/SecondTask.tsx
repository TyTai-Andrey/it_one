import React, { FC, useEffect } from 'react';
import styles from './SecondTask.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { servicesActions } from '@bus/services/actions';
import { getServicesData } from '@bus/services/selectors';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

export type SecondTaskProps = {};

const SecondTask: FC<SecondTaskProps> = (props) => {
  const data = useSelector(getServicesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(servicesActions.fetchServicesAsync());
  }, []);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {map(data, (i) => (
          <li key={i.id}>
            <Link to={`/services/${i.id}/details`}>
              <span>{i.name}</span>
              <span>{i.price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondTask;
