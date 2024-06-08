import { FC, ReactNode } from 'react';

import Navbar from 'src/components/navbar';
import { MenuProvider } from './MenuContext';

import s from './MainLayout.module.scss';
import 'src/assets/scss/index.scss';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <MenuProvider>
      <div className="wrapper">
        <Navbar /> 
        <main className={s.main}>{children}</main>
      </div>
    </MenuProvider>
  );
};
export default MainLayout;
