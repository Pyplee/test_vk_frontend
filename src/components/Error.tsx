import React from 'react';
import { Result } from 'antd';

interface CustomError extends Error {
  status?: number | string;
}

interface ErrorProps {
  error: CustomError;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  const message = error.message;
  const status = error.status || '404';
  console.log(error)
  return(
    <Result
    status="error"
    title={status}
    subTitle={message}
  >
  </Result>
  )
}

export default Error;