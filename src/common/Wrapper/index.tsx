import { WrapperProps } from './types';
import './styles.scss';

export const Wrapper = ({ children, onClose, ...props }: WrapperProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div className="wrapper" {...props} onClick={handleClick}>
      {children}
    </div>
  );
};
