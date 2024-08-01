import './styles.scss';
import HeartPulseIcon from '../../assets/icons/heart-pulse-simple.svg';
import { CustomButton, Typography } from '../../common';
import { Routes } from '../../routes';

export const Appointment = () => {
  return (
    <div className="appointment" id={Routes.APPOINTMENT}>
      <div className="appointment__container _container">
        <HeartPulseIcon />
        <Typography fontSize={40} fontWeight={600} className="appointment__text">
          Don’t wait and make an appointment today
        </Typography>
        <CustomButton className="budget__button" paddingHorizontal={40}>
          Book an appointment
        </CustomButton>
      </div>
    </div>
  );
};
