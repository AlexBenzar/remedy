import FemaleDoctorImage from '../../assets/img/female-doctor.png';
import { Typography } from '../../common';
import { Routes } from '../../routes';
import { details } from './constants';
import './styles.scss';

export const Doctor = () => {
  return (
    <div className="doctor" id={Routes.DOCTOR}>
      <div className="doctor__container _container">
        <div className="doctor__info">
          <div className="doctor__image">
            <img src={FemaleDoctorImage} alt="female-doctor" />
          </div>
          <div className="doctor__title">
            <Typography fontSize={40} fontWeight={600}>
              I’m Arjun Sharma
            </Typography>
          </div>
          <div className="doctor__text">
            <Typography>
              The head doctor at Shanti Clinic and brings over 10 years of medical experience to his
              practice. A graduate of the prestigious All India Institute of Medical Sciences
              (AIIMS), Dr. Sharma specializes in internal medicine with a focus on preventive care
              and chronic disease management.
            </Typography>
          </div>
        </div>
        <div className="doctor__details details">
          {details.map((detail) => (
            <div className="details__container">
              <div className="details__item">
                <div className="details__image">{detail.img}</div>
                <div className="details__title">
                  <Typography fontSize={18}>{detail.title}</Typography>
                </div>
                <div className="details__text">
                  <Typography>{detail.text}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
