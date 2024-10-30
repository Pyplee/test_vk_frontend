import { theme, ConfigProvider } from 'antd'
import type { FC, PropsWithChildren } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgContainer: 'transparent',
          colorBgLayout: 'transparent'
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider