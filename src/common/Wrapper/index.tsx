import { WrapperProps } from './types';
import './styles.scss';

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <div className="wrapper" {...props}>
      {children}
    </div>
  );
};
