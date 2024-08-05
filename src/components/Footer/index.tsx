import FacebookIcon from '../../assets/icons/facebook.svg';
import HeartPulseIcon from '../../assets/icons/heart-pulse-simple.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import PinterestIcon from '../../assets/icons/pinterest.svg';
import { CustomButton, Typography } from '../../common';
import { CustomButtonType } from '../../common/CustomButton/types';
import { Routes } from '../../routes';
import { menuItems } from '../Header/constants';
import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__logo">
          <HeartPulseIcon />
        </div>
        <div className="footer__info">
          <div className="footer__address address">
            <div className="address__link">
              <Typography>
                1234 Health Avenue
                <br />
                Wellness City, HC 56789
              </Typography>
            </div>
            <div className="address__hours">
              <Typography fontSize={14}>Opening hours: Mon - Sat: 9 AM - 6 PM</Typography>
            </div>
            <div className="address__social">
              <FacebookIcon />
              <InstagramIcon />
              <PinterestIcon />
            </div>
          </div>
          <div className="footer__contact contact-us">
            <div className="contact-us__title">
              <Typography>Contact</Typography>
            </div>
            <div className="contact-us__number">
              <Typography fontSize={28} fontWeight={500}>
                +921212323332
              </Typography>
            </div>
            <CustomButton
              isActive
              className="contact-us__button"
              paddingHorizontal={20}
              textSize={16}
              buttonType={CustomButtonType.A}
              customHref={Routes.CONTACT}>
              Contact us
            </CustomButton>
          </div>
          <div className="footer__menu">
            {menuItems.map((item) => (
              <a href={`#${item.link}`}>
                <Typography>{item.title}</Typography>
              </a>
            ))}
          </div>
        </div>
        <div className="footer__copyright">
          <Typography fontSize={14}>© 2024 Remedy | All Rights Reserved</Typography>
        </div>
      </div>
    </footer>
  );
};
