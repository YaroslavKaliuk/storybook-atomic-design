import { createContext, useContext } from 'react';

import { UIAppType } from '../types';

export const AppTypeContext = createContext<UIAppType | undefined>(undefined);

export const useAppType = () => {
  const appType = useContext(AppTypeContext);
  return appType;
};
