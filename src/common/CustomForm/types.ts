export enum FormType {
  CONTACT = 'contact',
  APPOINTMENT = 'appointment',
}

export interface CustomFormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit: () => void;
  formType?: FormType;
}
