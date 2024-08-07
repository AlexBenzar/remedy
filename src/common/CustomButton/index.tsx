import classNames from 'classnames';
import { Typography } from '../Typography/intex';
import './styles.scss';
import { CustomButtonProps, CustomButtonType } from './types';

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
  const ButtonWrapper = ({ children }: { children: React.ReactNode }) => {
    return buttonType === CustomButtonType.BUTTON ? (
      children
    ) : (
      <a href={`#${customHref}`}>{children}</a>
    );
  };
  return (
    <ButtonWrapper>
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
    </ButtonWrapper>
  );
};
