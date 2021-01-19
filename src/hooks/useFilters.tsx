import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  ReactNode,
} from 'react';

import filtersApi from '../services/filters';

interface IContext {
  children: ReactNode;
}

interface IFilterValues {
  id: string;
  name: string;
  values: [
    {
      value: string;
      name: string;
    },
  ];
}

interface IFilterData {
  filters: IFilterValues[];
}

interface IResponse {
  data: IFilterData;
}

const FiltersContext = createContext<IFilterData>({} as IFilterData);

export const FiltersProvider: React.FC<IContext> = ({ children }: IContext) => {
  const [filters, setFilters] = useState<IFilterValues[]>([
    {
      id: '',
      name: '',
      values: [
        {
          value: '',
          name: '',
        },
      ],
    },
  ]);

  const getFilters = useCallback(async () => {
    try {
      const response = (await filtersApi.get('/')) as IResponse;

      const newFilters = response.data.filters;

      setFilters(newFilters);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getFilters();
  }, [getFilters]);

  return (
    <FiltersContext.Provider
      value={{
        filters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export function useFilters(): IFilterData {
  const context = useContext(FiltersContext);

  return context;
}
