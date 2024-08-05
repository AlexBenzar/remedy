import { useState } from 'react';
import MessageIcon from '../../assets/icons/message.svg';
import PhoneIcon from '../../assets/icons/phone-number.svg';
import { CustomButton, CustomForm, Modal, Typography } from '../../common';
import { Routes } from '../../routes';
import './styles.scss';

export const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="contact" id={Routes.CONTACT}>
      <div className="contact__container _container">
        <div className="contact__title">
          <Typography fontSize={40} fontWeight={600}>
            Contact
          </Typography>
        </div>
        <div className="contact__body">
          <div className="contact__info">
            <div className="contact__address-title">
              <Typography fontSize={18}>ADDRESS</Typography>
            </div>
            <div className="contact__address-link">
              <Typography fontSize={28} fontWeight={500}>
                1234 Health Avenue
                <br />
                Wellness City, HC 56789
              </Typography>
            </div>
            <div className="contact__address-hours">
              <Typography fontSize={18}>Opening hours: Mon - Sat: 9 AM - 6 PM</Typography>
            </div>
            <div className="contact__social">
              <Typography fontSize={28} fontWeight={500}>
                <PhoneIcon /> +921212323332
              </Typography>
              <Typography fontSize={28} fontWeight={500}>
                <MessageIcon /> remedy.contact@gmail.com
              </Typography>
            </div>
            <CustomButton
              className="contact__button"
              paddingHorizontal={40}
              onClick={() => window.open('https://maps.google.com')}>
              Go to map
            </CustomButton>
          </div>
          <CustomForm onSubmit={() => setIsSubmit(true)} />
          <Modal
            isVisible={isSubmit}
            onClick={() => setIsSubmit(false)}
            title="Messsage is successfully sent. We will reply you soon."
          />
        </div>
      </div>
    </div>
  );
};
