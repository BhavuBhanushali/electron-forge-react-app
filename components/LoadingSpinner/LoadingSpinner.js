import React from 'react';
import { Spin } from 'antd';
import './index.less';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <Spin size="large" />
  </div>
);

export default LoadingSpinner;