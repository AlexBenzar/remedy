import LocationIcon from '../../assets/icons/location.svg';
import MessageIcon from '../../assets/icons/message.svg';
import BurgerIcon from '../../assets/icons/burger.svg';
import { Routes } from '../../routes';

export const menuItems = [
  {
    title: 'Home',
    link: Routes.HOME,
  },
  {
    title: 'Services',
    link: Routes.SERVICES,
  },
  {
    title: 'About',
    link: Routes.ABOUT,
  },
  {
    title: 'Packages',
    link: Routes.PACKAGES,
  },
  {
    title: 'Contact',
    link: Routes.CONTACT,
  },
];

export const subMenuItems = [
  {
    alt: 'location',
    img: <LocationIcon />,
    link: Routes.LOCATION,
  },
  {
    alt: 'message',
    img: <MessageIcon />,
    link: Routes.CONTACT,
  },
  {
    alt: 'burger',
    img: <BurgerIcon />,
  },
];
