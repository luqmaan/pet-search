import React from 'react';
import moment from 'moment';
import {Card, CardImage} from 'rebass';

import './Intake.css';

export default function({intake}) {
  const link = `http://www.petharbor.com/pet.asp?uaid=ASTN.${intake.animal_id}`;
  const image = `http://www.petharbor.com/get_image.asp?RES=Detail&ID=${intake.animal_id}&LOCATION=ASTN`;
  return (
    <div className="Intake">
      <div className="Overview">
        <div className="IntakePhoto" >
          <a href={link} target="_blank">
            <img src={image} />
          </a>
        </div>
        <div className="IntakeDetails">
          <div className="Info"><b>Type</b>{intake.animal_type}</div>
          <div className="Info"><b>Age</b>{intake.age_upon_intake}</div>
          <div className="Info"><b>Breed</b>{intake.breed}</div>
          <div className="Info"><b>Color</b>{intake.color}</div>
          <div className="Info"><b>Sex</b>{intake.sex_upon_intake}</div>
          <div className="Info"><b>Intake</b>{
            moment(intake.datetime).diff(moment(), 'weeks') < 1
              ? moment(intake.datetime).fromNow()
              : moment(intake.datetime).format('MM/DD/YY')
          }</div>
        </div>
      </div>
      <div className="AdditionalInfo">
        {intake.name && <div className="Info"><b>Name</b>{intake.name}</div>}
        <div className="Info"><b>ID</b>{intake.animal_id}</div>
        <div className="Info"><b>Found at</b>{intake.found_location}</div>
        <div className="Info"><b>Intake Type</b>{intake.intake_type}</div>
        <div className="Info"><b>Intake Condition</b>{intake.intake_condition}</div>
      </div>
    </div>
  );
}
