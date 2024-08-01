import LocationIcon from '../../assets/icons/location.svg';
import { CustomButton, Typography } from '../../common';
import { Routes } from '../../routes';
import './styles.scss';

export const Location = () => {
  return (
    <div className="location" id={Routes.LOCATION}>
      <div className="location__container _container">
        <div className="location__info">
          <div className="location__image">
            <LocationIcon />
          </div>
          <div className="location__title">
            <Typography fontSize={40} fontWeight={600}>
              Visit our new facility. We’re looking forward to seeing you!
            </Typography>
          </div>
          <div className="location__text">
            <Typography fontSize={20}>
              1234 Health Avenue
              <br />
              Wellness City, HC 56789
            </Typography>
          </div>
          <CustomButton className="location__button" isActive paddingHorizontal={40}>
            Book an appointment
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
