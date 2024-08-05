import { useState } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
import { CustomButton } from '../../common';
import { CustomButtonType } from '../../common/CustomButton/types';
import { menuItems, subMenuItems } from './constants';
import './styles.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__content _container">
        <div className="header__logo">
          <LogoIcon />
        </div>
        <nav className={`header__menu menu ${isMenuOpen && '_active'}`}>
          <ul className="menu__list">
            {menuItems.map((item) => (
              <li>
                <CustomButton
                  className="menu__item"
                  paddingHorizontal={0}
                  isActive={item.title === 'Home'}
                  buttonType={CustomButtonType.A}
                  customHref={item.link}>
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
                {item.alt === 'burger' ? (
                  <CustomButton
                    className={`sub-menu__item sub-menu__burger`}
                    paddingHorizontal={10}
                    paddingVertical={10}
                    isActive={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {item.img}
                  </CustomButton>
                ) : (
                  <CustomButton
                    className={`sub-menu__item`}
                    paddingHorizontal={10}
                    paddingVertical={10}
                    buttonType={CustomButtonType.A}
                    customHref={item.link}>
                    {item.img}
                  </CustomButton>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
