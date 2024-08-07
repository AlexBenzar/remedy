import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CustomButton } from '../CustomButton';
import { Typography } from '../Typography/intex';
import './styles.scss';
import { CustomFormProps, FormType } from './types';

export const CustomForm = ({
  onSubmit,
  formType = FormType.CONTACT,
  ...props
}: CustomFormProps) => {
  const EMAIL_PATTERN: RegExp =
    /^[A-Za-z0-9_+-](\.?[A-Za-z0-9_+-])*@[A-Za-z0-9-](\.?[A-Za-z0-9-])*\.[A-Za-z0-9-]{2,8}$/;

  interface IFormValues {
    fullName: string;
    phone: string;
    email: string;
    story: string;
    date: string;
  }

  const initialValues: IFormValues = {
    fullName: '',
    phone: '',
    email: '',
    story: '',
    date: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').trim().matches(EMAIL_PATTERN).required('Required'),
    story: Yup.string(),
    date: Yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: IFormValues) => {
        console.log(values);
        onSubmit();
      }}>
      {({ values, handleChange }) => (
        <Form className="form" {...props}>
          <div className="form__title">
            <Typography fontSize={18}>
              {formType === FormType.CONTACT ? 'CONTACT FORM' : 'BOOK APPOINTMENT FORM'}
            </Typography>
          </div>
          <div className="form__sub-title">
            <Typography fontSize={32} fontWeight={500}>
              <>
                Fill the form to <br />
                <span>
                  {formType === FormType.CONTACT ? 'contact us directly' : 'book an appointment'}
                </span>
              </>
            </Typography>
          </div>
          <div className="form__inputs">
            <input
              name="fullName"
              type="text"
              placeholder="Full name"
              value={values['fullName']}
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={values['phone']}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={values['email']}
              onChange={handleChange}
            />
            {formType === FormType.CONTACT ? (
              <textarea
                name="story"
                id="story"
                rows={4}
                value={values['story']}
                onChange={handleChange}
              />
            ) : (
              <input
                name="date"
                type="date"
                placeholder="Date"
                max={new Date().toISOString().split('T')[0]}
                value={values['date']}
                onChange={handleChange}
              />
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
        </Form>
      )}
    </Formik>
  );
};
