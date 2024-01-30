import React, { FC } from 'react';
import styles from './ErrorButton.module.scss';
import { Alert, Button, Space } from 'antd';

export type ErrorButtonProps = {
  onClick?: () => void;
  title?: string;
  textButton?: string;
};

export const ErrorButton: FC<ErrorButtonProps> = ({
  onClick,
  title = 'Произошла ошибка!',
  textButton = 'Повторить запрос',
}) => {
  return (
    <Alert
      message={
        <Space>
          {title}
          <Button onClick={onClick} className={styles.button}>
            {textButton}
          </Button>
        </Space>
      }
      type="error"
      // closable
      // onClose={onClose}
    />
    // <div className={styles.root}>

    //   {onClick && (
    //     <button onClick={onClick} className={styles.button}>
    //       {textButton}
    //     </button>
    //   )}
    // </div>
  );
};
