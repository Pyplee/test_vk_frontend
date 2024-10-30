import { Layout } from 'antd'
const { Footer } = Layout
import type { FC } from 'react';

const FooterCustom: FC = () => {
  return (
    <Footer style={{ textAlign: 'center', background: 'transparent' }}>
      Test VK © 2024 Created by Pyplee
    </Footer>
  );
}

export default FooterCustom