import React from 'react';
import { Link } from 'react-router-dom';
import './home-info-card.css';

interface HomeInfoCardProps {
  link: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

function HomeInfoCard(props: HomeInfoCardProps) {
  return (
    <Link 
    to={props.link}
    className="home-info-card_container"
  >
    <div className="home-info-card_container__icon">
      {props.icon}
    </div>
    <div className="home-info-card_container__info">
      <div className="home-info-card_container__title">
        {props.title}
      </div>
      <div className="home-info-card_container__content">
        {props.content}
      </div>
    </div>
  </Link>
  )
}

export default HomeInfoCard