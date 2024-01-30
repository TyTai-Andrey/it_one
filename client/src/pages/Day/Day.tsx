import React, { FC, useEffect, useState } from 'react';
import styles from './Day.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { pathnames } from '@routes/App/utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCalendarCurrentDay,
  getCalendarList,
} from '@bus/calendar/selectors';
import { find } from 'lodash';
import { calendarActions } from '@bus/calendar/actions';
import { BadgeProps } from 'antd';
import dayjs from 'dayjs';
import { dateFormat } from '@utils/help';
import { DayModel } from '@bus/calendar/interfaces';
import { List } from './components/List';
import { Settings } from './components/Settings';

export type DayProps = {};

const Day: FC<DayProps> = () => {
  // format DD-MM-YYYY
  const { date } = useParams<{ date: string }>();

  const list = useSelector(getCalendarList);
  const day = useSelector(getCalendarCurrentDay);

  const navigate = useNavigate();
  const dispath = useDispatch();

  const [value, setValue] = useState<string | undefined>(undefined);
  const [type, setType] = useState<BadgeProps['status']>('success');

  useEffect(() => {
    if (!day && dayjs(date, dateFormat).isValid()) {
      const currentDay = find(list, (i) => i.id === date);

      if (currentDay) {
        dispath(calendarActions.setCurrentDay(currentDay));
      }
    }
  }, [date, day, list]);

  useEffect(() => {
    return () => {
      dispath(calendarActions.setCurrentDay(null));
    };
  }, []);

  const onBackHandler = () => {
    navigate(pathnames.thirdTask);
  };

  const onCreateNotification = () => {
    if (date && value) {
      const currentDay: DayModel = {
        id: date,
        value: [
          {
            type,
            content: value,
            id: day?.value?.length ? day?.value?.length + 1 : 1,
          },
          ...(day?.value || []),
        ],
      };
      dispath(calendarActions.addDay(currentDay));
      setValue(undefined);
    }
  };

  return !dayjs(date, dateFormat).isValid() ? (
    <>Не валидная дата</>
  ) : (
    <div className={styles.root}>
      <Settings
        onBackHandler={onBackHandler}
        onCreateNotification={onCreateNotification}
        type={type}
        value={value}
        setType={setType}
        setValue={setValue}
      />
      <List />
    </div>
  );
};

export default Day;
