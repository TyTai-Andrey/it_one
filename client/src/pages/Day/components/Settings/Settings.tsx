import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import {
  BadgeProps,
  Button,
  Input,
  Radio,
  RadioChangeEvent,
  Space,
} from 'antd';

import styles from './Settings.module.scss';

const typeOptions = ['success', 'warning', 'error'];

export type SettingsProps = {
  onBackHandler: () => void;
  onCreateNotification: () => void;
  type: BadgeProps['status'];
  value: string | undefined;
  setType: React.Dispatch<React.SetStateAction<BadgeProps['status']>>;
  setValue: (value: React.SetStateAction<string | undefined>) => void;
};

const StyledSpace = styled(Space)({
  display: 'flex',
});

export const Settings: FC<SettingsProps> = ({
  onBackHandler,
  onCreateNotification,
  type,
  value,
  setType,
  setValue,
}) => {
  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onChangeTypeHandler = useCallback(
    ({ target: { value } }: RadioChangeEvent) => {
      setType(value);
    },
    [],
  );

  return (
    <StyledSpace direction="vertical">
      <Space className={styles.buttons}>
        <Button onClick={onBackHandler}>Назад</Button>
        <Button onClick={onCreateNotification}>Добавить</Button>
      </Space>
      <Radio.Group
        options={typeOptions}
        onChange={onChangeTypeHandler}
        value={type}
      />
      <Input
        className={styles.input}
        value={value}
        onChange={onChangeInputHandler}
        placeholder="Введите напоминание"
      />
    </StyledSpace>
  );
};
