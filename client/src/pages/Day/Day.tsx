import React, { FC, useEffect, useState } from 'react';
import styles from './Day.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { pathnames } from '@routes/App/utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCalendarCurrentDay,
  getCalendarList,
} from '@bus/calendar/selectors';
import { find, map } from 'lodash';
import { calendarActions } from '@bus/calendar/actions';
import { Badge, BadgeProps, Input } from 'antd';
import dayjs from 'dayjs';
import { dateFormat } from '@utils/help';
import { DayModel } from '@bus/calendar/interfaces';
import { CloseOutlined } from '@ant-design/icons';

export type DayProps = {};

const Day: FC<DayProps> = () => {
  // format DD-MM-YYYY
  const { date } = useParams<{ date: string }>();

  const list = useSelector(getCalendarList);
  const day = useSelector(getCalendarCurrentDay);

  const navigate = useNavigate();
  const dispath = useDispatch();

  const [value, setValue] = useState<string | undefined>(undefined);

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

  if (!dayjs(date, dateFormat).isValid()) return <>Не валидная дата</>;

  const onBackHandler = () => {
    navigate(pathnames.thirdTask);
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onCreateNotification = () => {
    if (date && value) {
      console.log(day);

      const currentDay: DayModel = {
        id: date,
        value: [
          ...(day?.value || []),
          {
            type: 'success',
            content: value,
            id: day?.value?.length ? day?.value?.length + 1 : 1,
          },
        ],
      };
      dispath(calendarActions.addDay(currentDay));
      setValue(undefined);
    }
  };

  const onClickDeleteHandler = (item: DayModel['value'][0]) => {
    if (date) {
      dispath(
        calendarActions.removeNotification({ id: date, notification: item }),
      );
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <button onClick={onBackHandler}>Назад</button>
        <button onClick={onCreateNotification}>Добавить</button>
      </div>
      <Input
        className={styles.input}
        value={value}
        onChange={onChangeInputHandler}
        placeholder="Введите напоминание"
      />
      {day?.value && (
        <ul className="events">
          {day?.value?.map((item) => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
              <CloseOutlined
                rev={undefined}
                style={{
                  fontSize: '10px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => onClickDeleteHandler(item)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Day;
