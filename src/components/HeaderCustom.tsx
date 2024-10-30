import { Layout, Image, Typography } from 'antd';
const { Title } = Typography
import type { FC } from 'react';
import githubLogo from '../assets/github.svg'

const { Header } = Layout;

const HeaderCustom: FC = () => {
  return (
    <Header 
      style={{ 
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        height: '64px'
      }}
    >
      <Image src={githubLogo} width={40}>
      </Image>
      <Title level={3} style={{ margin: 20 }}>
        Github view projects
      </Title>
    </Header>
  );
};

export default HeaderCustom;