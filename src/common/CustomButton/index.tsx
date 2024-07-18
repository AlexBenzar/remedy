import { Typography } from '../Typography/intex';
import { CustomButtonProps } from './types';
import classNames from 'classnames';
import './styles.scss';

export const CustomButton: React.FC<CustomButtonProps> = ({
  isActive = false,
  textSize = 18,
  paddingHorizontal = 70,
  paddingVertical = 15,
  children,
  className,
  style,
  ...props
}) => {
  return (
    <button
      style={{ padding: `${paddingVertical}px ${paddingHorizontal}px`, ...style }}
      className={classNames(
        '_button',
        { _active: !isActive && typeof children === 'string' },
        { '_active-svg': !isActive && typeof children !== 'string' },
        className,
      )}
      {...props}>
      <Typography fontSize={textSize}>{children}</Typography>
    </button>
  );
};
