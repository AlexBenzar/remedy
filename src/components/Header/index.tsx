import { CustomButton } from '../../common/CustomButton';
import './styles.scss';

import LogoIcon from '../../assets/icons/logo.svg';
import BurgerIcon from '../../assets/icons/burger.svg';
import { menuItems, subMenuItems } from './constants';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__content _container">
        <LogoIcon className="header__logo" />
        <nav className={`header__menu menu ${isMenuOpen && '_active'}`}>
          <ul className="menu__list">
            {menuItems.map((item) => (
              <li>
                <CustomButton
                  className="menu__item"
                  paddingHorizontal={0}
                  isActive={item.title === 'Home'}>
                  {item.title}
                </CustomButton>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="header__sub-menu sub-menu">
          <ul className="sub-menu__list">
            {subMenuItems.map((item) => (
              <li>
                <CustomButton
                  className={`sub-menu__item ${item.alt === 'burger' && 'sub-menu__burger'}`}
                  paddingHorizontal={10}
                  paddingVertical={10}
                  isActive={item.alt === 'burger' && isMenuOpen}
                  onClick={() => item.alt === 'burger' && setIsMenuOpen(!isMenuOpen)}>
                  {item.img}
                </CustomButton>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
