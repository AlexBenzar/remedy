import surgeonsImage from '../../assets/img/surgeons.png';
import QuoteIcon from '../../assets/icons/quote.svg';
import { Typography } from '../../common';
import './styles.scss';
import { Routes } from '../../routes';

export const Quote = () => {
  return (
    <div className="quote" id={Routes.ABOUT}>
      <div className="quote__container _container">
        <div className="quote__image">
          <img src={surgeonsImage} alt="surgeons" />
        </div>
        <div className="quote__info">
          <div className="quote__svg">
            <QuoteIcon />
          </div>
          <div className="quote__text">
            <Typography fontSize={30} fontWeight={500}>
              Success is determined not by whether or not you face obstacles, but by your reaction
              to them. And if you look at these obstacles as a containing fence, they become your
              excuse for failure. If you look at them as a hurdle, each one strengthens you for the
              next."
            </Typography>
          </div>
          <div className="quote__author">
            <Typography fontSize={18}>Colin Hoover</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
