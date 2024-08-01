import { CustomButton } from '../CustomButton';
import { Typography } from '../Typography/intex';
import './styles.scss';
import { CustomFormProps } from './types';

export const CustomForm = ({ onSubmit, formType = 'contact', ...props }: CustomFormProps) => {
  const submitAction = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={submitAction} className="form" {...props}>
      <div className="form__title">
        <Typography fontSize={18}>
          {formType === 'contact' ? 'CONTACT FORM' : 'BOOK APPOINTMENT FORM'}
        </Typography>
      </div>
      <div className="form__sub-title">
        <Typography fontSize={32} fontWeight={500}>
          {formType === 'contact' ? (
            <>
              Fill the form to <br />
              <span>contact us directly</span>
            </>
          ) : (
            <>
              Fill the form to <br />
              <span>book an appointment</span>
            </>
          )}
        </Typography>
      </div>
      <div className="form__inputs">
        <input type="text" placeholder="Full name" required />
        <input type="tel" placeholder="Phone" required />
        <input type="email" placeholder="Email" required />
        {formType === 'contact' ? (
          <textarea id="story" name="story" rows={4} />
        ) : (
          <input type="date" placeholder="Date" required />
        )}
      </div>
      <div className="form__checkbox">
        <input type="checkbox" id="custom-checkbox" />
        <label htmlFor="custom-checkbox"></label>
        <Typography>I consent to proccessing of data</Typography>
      </div>
      <CustomButton
        isActive
        className="form__button"
        paddingHorizontal={60}
        textSize={16}
        type="submit">
        Send
      </CustomButton>
    </form>
  );
};
