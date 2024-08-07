import { useState } from 'react';
import { CustomButton, CustomForm, Modal, Typography, Wrapper } from '../../common';
import { CustomButtonType } from '../../common/CustomButton/types';
import { FormType } from '../../common/CustomForm/types';
import { Routes } from '../../routes';
import './styles.scss';

export const Hello = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="hello" id={Routes.HOME}>
      <div className="hello__container _container">
        <div className="hello__info">
          <div className="hello__title">
            <Typography fontSize={18}>REMEDY</Typography>
          </div>
          <div className="hello__text">
            <Typography fontSize={60} fontWeight={600}>
              Hi, I’m Nir Goldson and I’ll be your family doctor!
            </Typography>
          </div>
          <div className="hello__buttons">
            <CustomButton
              className="hello__item"
              isActive
              paddingHorizontal={40}
              onClick={() => setIsFormOpen(true)}>
              Book an appointmet
            </CustomButton>
            <CustomButton
              className="hello__item"
              paddingHorizontal={40}
              buttonType={CustomButtonType.A}
              customHref={Routes.SERVICES}>
              My experience
            </CustomButton>
          </div>
        </div>
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
