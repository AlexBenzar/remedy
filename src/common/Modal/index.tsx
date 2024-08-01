import SuccessIcon from '../../assets/icons/success.svg';
import { Typography } from '../Typography/intex';
import { Wrapper } from '../Wrapper';
import './styles.scss';
import { ModalProps } from './types';

export const Modal = ({ isVisible, title, ...props }: ModalProps) => {
  return (
    isVisible && (
      <Wrapper {...props}>
        <div className="modal">
          <SuccessIcon />
          <Typography fontSize={32} fontWeight={500}>
            {title}
          </Typography>
        </div>
      </Wrapper>
    )
  );
};
