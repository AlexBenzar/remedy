import { useState } from 'react';
import HeartPulseIcon from '../../assets/icons/heart-pulse-simple.svg';
import { CustomButton, CustomForm, Modal, Typography, Wrapper } from '../../common';
import { FormType } from '../../common/CustomForm/types';
import './styles.scss';

export const Appointment = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="appointment">
      <div className="appointment__container _container">
        <HeartPulseIcon />
        <Typography fontSize={40} fontWeight={600} className="appointment__text">
          Don’t wait and make an appointment today
        </Typography>
        <CustomButton
          className="budget__button"
          paddingHorizontal={40}
          onClick={() => setIsFormOpen(true)}>
          Book an appointment
        </CustomButton>
      </div>
      {isFormOpen && (
        <Wrapper
          onClose={() => {
            setIsFormOpen(false);
          }}>
          <CustomForm
            onSubmit={() => {
              setIsFormOpen(false);
              setIsSubmit(true);
            }}
            formType={FormType.APPOINTMENT}
          />
        </Wrapper>
      )}
      <Modal
        isVisible={isSubmit}
        onClose={() => setIsSubmit(false)}
        title="Appointment successfully booked. We will contact you soon."
      />
    </div>
  );
};
