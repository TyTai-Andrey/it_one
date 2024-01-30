import React, { FC } from 'react';
import styles from './List.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCalendarCurrentDay } from '@bus/calendar/selectors';
import { List as ListUI, Badge } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { DayModel } from '@bus/calendar/interfaces';
import { calendarActions } from '@bus/calendar/actions';

export type ListProps = {};

export const List: FC<ListProps> = ({}) => {
  const { date } = useParams<{ date: string }>();
  const dispath = useDispatch();
  const onClickDeleteHandler = (item: DayModel['value'][0]) => {
    if (date) {
      dispath(
        calendarActions.removeNotification({ id: date, notification: item }),
      );
    }
  };
  const day = useSelector(getCalendarCurrentDay);
  return (
    <>
      {day?.value && (
        <ListUI
          className="events"
          dataSource={day?.value}
          renderItem={(item) => (
            <ListUI.Item key={item.id}>
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
            </ListUI.Item>
          )}
        ></ListUI>
      )}
    </>
  );
};
