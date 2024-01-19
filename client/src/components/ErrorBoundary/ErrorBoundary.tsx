import React from 'react';

type ErrorBoundaryState = {
  error: any;
  errorInfo: any;
};

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: '900px',
            flexDirection: 'column',
          }}
        >
          <h2>Что-то пошло не так. Попробуйте перезагрузить страницу.</h2>
          <h3 style={{ marginTop: '20px' }}>
            Если проблема слишком назойливая, обратитесь в поддержку и
            предоставьте в теле письма следующее содержание:
          </h3>
          <h4 style={{ marginTop: '20px' }}>
            {errorInfo.componentStack.split('\n').map((item: string) => (
              <p>{item}</p>
            ))}
          </h4>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
