import { BadgeProps } from 'antd';

export type DayModel = {
  /** @format DD-MM-YYYY */
  id: string;
  value: { type: BadgeProps['status']; content: string; id: number }[];
};
