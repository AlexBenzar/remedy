import SmilingDoctorImage from '../../assets/img/smiling-doctor.png';
import { CustomButton, Typography } from '../../common';
import { services } from './constants';
import './styles.scss';
import CheckmarkIcon from '../../assets/icons/checkmark.svg';
import { Routes } from '../../routes';
import { CustomButtonType } from '../../common/CustomButton/types';

export const Welcome = () => {
  return (
    <div className="welcome" id={Routes.ABOUT}>
      <div className="welcome__container _container">
        <div className="welcome__info">
          <div className="welcome__title">
            <Typography fontSize={40} fontWeight={600}>
              Welcome to Remedy!
            </Typography>
          </div>
          <div className="welcome__blocks">
            {services.map((service, i, arr) => (
              <div
                className={`welcome__service ${
                  arr.length % 2 !== 0 && i === arr.length - 1 ? '_service__last' : ''
                }`}>
                <CheckmarkIcon />
                <Typography>{service}</Typography>
              </div>
            ))}
          </div>
          <CustomButton
            className="hello__item"
            isActive
            paddingHorizontal={40}
            buttonType={CustomButtonType.A}
            customHref={Routes.DOCTOR}>
            Read about us
          </CustomButton>
        </div>
        <div className="welcome__image">
          <img src={SmilingDoctorImage} alt="smiling-doctor" />
        </div>
      </div>
    </div>
  );
};
