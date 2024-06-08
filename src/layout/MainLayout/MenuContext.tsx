import React, { FC, createContext, useState, useContext, ReactNode } from 'react';

interface MenuContextType {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);
//eslint-disable-next-line
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>{children}</MenuContext.Provider>
  );
};
