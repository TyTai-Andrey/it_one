import React, { FC, useState } from 'react';
import dayjs from 'dayjs';
import { filter, find } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Badge, Calendar } from 'antd';

import { getCalendarList } from '@bus/calendar/selectors';
import { DayModel } from '@bus/calendar/interfaces';
import { dateFormat } from '@utils/help';

import type { BadgeProps, CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';

import styles from './ThirdTask.module.scss';
import { CalendarMode } from 'antd/es/calendar/generateCalendar';

export type ThirdTaskProps = {};

const getListData = (value: Dayjs, calendarList: DayModel[] | null) => {
  if (!calendarList) return [];

  const day = find(calendarList, (i) => i.id === value.format(dateFormat));

  if (day) {
    return day.value;
  }

  return [];
};

const getMonthData = (value: Dayjs, calendarList: DayModel[] | null) => {
  const days = filter(
    calendarList,
    (i) => dayjs(i.id, dateFormat).month() === value.month(),
  );
  const notifications = days.reduce((prev, i) => prev + i.value.length, 0);
  return notifications;
};

const ThirdTask: FC<ThirdTaskProps> = () => {
  const navigate = useNavigate();
  const calendarList = useSelector(getCalendarList);
  const [mode, setMode] = useState<CalendarMode>('month');

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value, calendarList);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value, calendarList);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChangeHandler = (_: Dayjs, mode: CalendarMode) => {
    setMode(mode);
  };

  return (
    <div className={styles.root}>
      <div className={styles.calendar}>
        <Calendar
          cellRender={cellRender}
          mode={mode}
          onPanelChange={onPanelChangeHandler}
          onChange={(date) => {
            if (mode === 'month')
              navigate(`/day/${date.format('DD-MM-YYYY')}/details`);
          }}
        />
      </div>
    </div>
  );
};

export default ThirdTask;