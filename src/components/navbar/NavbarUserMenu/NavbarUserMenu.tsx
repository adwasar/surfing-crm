import { FC, useState, useMemo } from 'react';
import { default as Chevron } from 'src/assets/icons/chevron.svg?react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './NavbarUserMenu.module.scss';

interface NavbarUserMenu {}

const NavbarUserMenu: FC<NavbarUserMenu> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { t } = useTranslation();

  const userMenuList = useMemo(
    () => [
      {
        name: t('Navbar.Profile'),
        to: '#',
      },
      {
        name: t('Navbar.Settings'),
        to: '#',
      },
      {
        name: t('Navbar.Sign out'),
        to: '#',
      },
    ],
    [t]
  );

  return (
    <div
      className={s.navbarUserMenu}
      onMouseEnter={() => {
        setIsOpenMenu(true);
      }}
      onMouseLeave={() => {
        setIsOpenMenu(false);
      }}
    >
      <div className={s.navbarUserMenu__button}>
        <div className={s.userImg}></div>
        <div className={s.userContent}>
          <div className={s.userInfo}>
            <span className={s.userInfo__name}>Evano</span>
            <span className={s.userInfo__position}>Project Manager</span>
          </div>
          <div className={`${s.chevron} ${isOpenMenu ? s.open : ''}`}>
            <Chevron />
          </div>
        </div>
      </div>
      <ul className={`${s.navbarUserMenu__content} ${isOpenMenu ? s.open : ''}`}>
        {userMenuList &&
          userMenuList.map(item => (
            <li key={item.name} className={s.navbarUserMenu__content__item}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default NavbarUserMenu;
