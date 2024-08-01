import { useState } from 'react';
import { Typography } from '../../common';
import { Routes } from '../../routes';
import { specializations } from './constants';
import './styles.scss';

export const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="services" id={Routes.SERVICES}>
      <div className="services__container _container">
        <div className="services__info">
          <Typography className="services__sub-title" fontSize={18}>
            Our services
          </Typography>
          <Typography className="services__title" fontSize={40} fontWeight={600}>
            Our specializations
          </Typography>
          <Typography className="services__text">
            Comprehensive clinic offering specialized services across various medical disciplines.
          </Typography>
        </div>
        <div className="services__specializations specializations">
          {specializations.map((spec, index) => (
            <div key={index} className="specializations__container">
              <div className={`specializations__item ${flippedIndex === index ? '_flipped' : ''}`}>
                <div className="specializations__side _front">
                  <div className="specializations__image">{spec.img}</div>
                  <div className="specializations__body">
                    <Typography className="specializations__title" fontSize={24} fontWeight={600}>
                      {spec.title}
                    </Typography>
                    <Typography className="specializations__text" fontSize={16}>
                      {spec.text}
                    </Typography>
                    <Typography
                      className="specializations__sub-text"
                      fontSize={16}
                      onClick={() => handleClick(index)}>
                      See more
                    </Typography>
                  </div>
                </div>
                <div className="specializations__side _back">
                  <Typography className="specializations__title" fontSize={24} fontWeight={600}>
                    {spec.title}
                  </Typography>
                  <Typography className="specializations__fullText" fontSize={16}>
                    {spec.fullText}
                  </Typography>
                  <Typography
                    className="specializations__sub-text"
                    fontSize={16}
                    onClick={() => handleClick(index)}>
                    See less
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
