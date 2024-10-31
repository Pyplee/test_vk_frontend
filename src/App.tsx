import ThemeProvider from './components/ThemeProvider'
import FooterCustom from './components/FooterCustom'
import HeaderCustom from './components/HeaderCustom'
import MainContainer from './components/MainContainer'
import ListReps from './components/elList/index'
import { Layout } from 'antd'
const { Content } = Layout
import useFetch from './hooks/index'
import { useState, useEffect } from 'react';
import Loader from './components/Loader'
import Error from './components/Error'
import { observer } from 'mobx-react-lite';
import { itemStore } from './stores/ItemStore';

const App = observer(() => {
  const { data, loading, error, loadMore} = useFetch();
  const [isLoading, setLoading] = useState<true | false>(true);
  const dataFromStore = itemStore.items;

  useEffect(() => {
    setLoading(loading);
  }, [loading, error, data, dataFromStore]);

  if(error !== null) {
    return(
      <>
        <ThemeProvider>
          <MainContainer >
            <HeaderCustom />
              <Content style={{ 
                padding: '0 48px', 
                background: 'transparent',
                flex: '1 1 auto'
              }}>
                <Error error={error}/>
              </Content>
            <FooterCustom />
          </MainContainer>
        </ThemeProvider>
      </>
    )
  }
  if (isLoading) {
    return(
      <>
        <ThemeProvider>
          <MainContainer >
            <HeaderCustom />
              <Content style={{ 
                padding: '0 48px', 
                background: 'transparent',
                flex: '1 1 auto'
              }}>
                <Loader />
              </Content>
            <FooterCustom />
          </MainContainer>
        </ThemeProvider>
      </>
    )
  }

  return (
    <ThemeProvider>
      <MainContainer >
        <HeaderCustom />
        <Content style={{ 
          padding: '0 48px', 
          background: 'transparent',
          flex: '1 1 auto'
        }}>
          <ListReps data={dataFromStore} loadMore={loadMore}/>
        </Content>
        <FooterCustom />
      </MainContainer>
    </ThemeProvider>
  );
});

export default App
