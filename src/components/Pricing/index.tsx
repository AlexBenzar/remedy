import { useState } from 'react';
import HeartPulseIcon from '../../assets/icons/heart-pulse-simple.svg';
import { CustomButton, CustomForm, Modal, Typography, Wrapper } from '../../common';
import { FormType } from '../../common/CustomForm/types';
import { Routes } from '../../routes';
import { budget } from './constants';
import './styles.scss';

export const Pricing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="pricing" id={Routes.PACKAGES}>
      <div className="pricing__container _container">
        <div className="pricing__info">
          <Typography className="pricing__sub-title" fontSize={18}>
            Pricing
          </Typography>
          <Typography className="pricing__title" fontSize={40} fontWeight={600}>
            Choose your health plan
          </Typography>
          <Typography className="pricing__text">Plans affordable for everyones budgets.</Typography>
        </div>
        <div className="pricing__budget budget">
          {budget.map((item) => (
            <div className="budget__container">
              <div className="budget__item">
                <div className="budget__image">
                  <div style={{ backgroundColor: item.imageColor }} />
                  <HeartPulseIcon />
                </div>
                <div className="budget__title">
                  <Typography fontSize={14}>{item.title}</Typography>
                </div>
                <Typography className="budget__price" fontSize={30} fontWeight={600}>
                  <span>$ </span>
                  {item.price}
                  <span> mo</span>
                </Typography>
                <div className="budget__list">
                  {item.list.map((listItem) => (
                    <div>
                      <Typography>{listItem}</Typography>
                    </div>
                  ))}
                </div>
                <CustomButton
                  className="budget__button"
                  isActive
                  paddingHorizontal={40}
                  onClick={() => setIsFormOpen(true)}>
                  Select
                </CustomButton>
              </div>
            </div>
          ))}
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
