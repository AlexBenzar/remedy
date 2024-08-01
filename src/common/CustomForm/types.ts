export interface CustomFormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit: () => void;
  formType?: 'contact' | 'appointment';
}
