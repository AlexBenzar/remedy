import { Typography } from '../Typography/intex';
import { CustomButtonProps, CustomButtonType } from './types';
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
  customHref = '',
  buttonType = CustomButtonType.BUTTON,
  ...props
}) => {
  return buttonType === CustomButtonType.BUTTON ? (
    <button
      style={{ padding: `${paddingVertical}px ${paddingHorizontal}px`, ...style }}
      className={classNames(
        className,
        '_button',
        { _active: !isActive && typeof children === 'string' },
        { '_active-svg': !isActive && typeof children !== 'string' },
      )}
      {...props}>
      <Typography fontSize={textSize}>{children}</Typography>
    </button>
  ) : (
    <a href={`#${customHref}`}>
      <button
        style={{ padding: `${paddingVertical}px ${paddingHorizontal}px`, ...style }}
        className={classNames(
          className,
          '_button',
          { _active: !isActive && typeof children === 'string' },
          { '_active-svg': !isActive && typeof children !== 'string' },
        )}
        {...props}>
        <Typography fontSize={textSize}>{children}</Typography>
      </button>
    </a>
  );
};
