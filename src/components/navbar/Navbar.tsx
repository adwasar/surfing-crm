import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import NavbarItem from './NavbarItem';
import NavbarUserMenu from './NavbarUserMenu';
import { useMenu } from 'src/layout/MainLayout/MenuContext';
import { default as Logo } from 'src/assets/icons/logo.svg?react';
import { default as Dashboard } from 'src/assets/icons/dashboard.svg?react';
import { default as Inventory } from 'src/assets/icons/inventory.svg?react';
import { default as Listings } from 'src/assets/icons/listings.svg?react';
import { default as Finance } from 'src/assets/icons/finance.svg?react';
import { default as Calendar } from 'src/assets/icons/calendar.svg?react';
import { default as Message } from 'src/assets/icons/message.svg?react';

import s from './navbar.module.scss';

interface Navbar {}

const Navbar: FC<Navbar> = () => {
  const location = useLocation();
  const { isOpenMenu, setIsOpenMenu } = useMenu();

  const { t } = useTranslation();

  const navbarList = useMemo(
    () => [
      { name: t('Navbar.Dashboard'), icon: Dashboard, to: '/' },
      { name: t('Navbar.Inventory'), icon: Inventory, to: '/inventory' },
      { name: t('Navbar.Listings'), icon: Listings, to: '/listings' },
      { name: t('Navbar.Financials & Reports'), icon: Finance, to: '/financials' },
      { name: t('Navbar.Booking calendar'), icon: Calendar, to: '/calendar' },
      { name: t('Navbar.Messages'), icon: Message, to: '/chat' },
    ],
    [t]
  );
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const [showGlow, setShowGlow] = useState(true);

  const handleScroll = () => {
    const navBar = navBarRef.current;
    if (navBar) {
      const scrollLeft = navBar.scrollLeft;
      const scrollWidth = navBar.scrollWidth;
      const clientWidth = navBar.clientWidth;

      if (scrollLeft + clientWidth >= scrollWidth) {
        setShowGlow(false);
      } else {
        setShowGlow(true);
      }
    }
  };

  useEffect(() => {
    const navBar = navBarRef.current;
    if (navBar) {
      navBar.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        navBar.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={`${s.nav__bar} ${isOpenMenu ? s.open : ''}`}
      onMouseEnter={() => {
        setIsOpenMenu(true);
      }}
      onMouseLeave={() => {
        setIsOpenMenu(false);
      }}
      ref={navBarRef}
    >
      <div>
        <Link to="/" className={s.logo}>
          <Logo />
        </Link>
        <ul className={s.navbarList}>
          {navbarList &&
            navbarList.map(item => (
              <NavbarItem
                key={item.name}
                name={item.name}
                to={item.to}
                active={location.pathname === item.to}
              >
                <item.icon />
              </NavbarItem>
            ))}
        </ul>
      </div>
      <NavbarUserMenu />
      {showGlow && <div className={s.filter}></div>}
    </div>
  );
};
export default Navbar;
