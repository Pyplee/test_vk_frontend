import { useState, useEffect } from 'react';
import { api, routes } from '../api/routes';

interface UserItem {
  id: number;
  name: string;
  description: string;
  link: string;
  avatar: string;
}

interface FetchState {
  data: UserItem[] | null;
  loading: boolean;
  error: Error | null;
  page: number;
}

const useFetchDataReps = () => {
  const [state, setState] = useState<FetchState>({
    data: null,
    loading: true,
    error: null,
    page: 1,
  });
  const [dataFetch, setDataFetch] = useState<UserItem[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
        setState(prev => ({ ...prev, loading: true }));
        await api.get(routes.filterJavaScript(state.page))
        .then((response) => {
          const rawData = response.data.items;
          const data = rawData.map((el: any) => {
            const { id, name, description } = el;
            const avatar = el.owner.avatar_url;
            return { id, name, description, avatar }
          })
          return data;
        })
        .then((data) => {
          setState(prev => ({
            ...prev,
            data: prev.data ? [...prev.data, ...data] : data,
            loading: false,
            page: prev.page + 1
          }));
        })
        .catch((error) => {
          setState(prev => ({
            ...prev,
            error: error instanceof Error ? error : new Error('Произошла ошибка при загрузке данных'),
            loading: false
          }));
        })
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setState(prev => ({ ...prev, page: prev.page + 1 }));
  };

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    page: state.page,
    loadMore
  };
};

export { useFetchDataReps };
