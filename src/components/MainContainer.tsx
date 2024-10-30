import { Layout } from 'antd'
import type { FC, PropsWithChildren } from 'react'

const MainContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={{ 
        background: 'transparent', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
      {children}
    </Layout>
  );
};

export default MainContainer