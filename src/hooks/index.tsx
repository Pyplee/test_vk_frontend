import { useEffect } from 'react';
import { useFetchDataReps } from './useFetchDataReps';
import { itemStore } from '../stores/ItemStore';

interface UseFetchResult {
  data: any,
  loading: boolean;
  error: Error | null;
  loadMore: () => void;
}

const useFetch = (): UseFetchResult => {
  const { data, loading, error, loadMore } = useFetchDataReps();
  useEffect(() => {
    if (data && !loading && !error) {
      itemStore.loadItems(data);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (loading) {
      itemStore.setLoading(loading);
    }
  }, [loading]);

  return {
    data,
    loading,
    error,
    loadMore
  };
};

export default useFetch;
