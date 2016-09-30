import React from 'react';

export default function({intake}) {
    return (
      <div>
        <div>
          <a href={`http://www.petharbor.com/pet.asp?uaid=ASTN.${intake.animal_id}`} target="_blank">
            <b>Animal ID:</b> {intake.animal_id}
          </a>
        </div>
        <div><b>Name:</b> {intake.name}</div>
        <div><b>DateTime:</b> {intake.datetime}</div>
        <div><b>Found Location:</b> {intake.found_location}</div>
        <div><b>Intake Type:</b> {intake.intake_type}</div>
        <div><b>Intake Condition:</b> {intake.intake_condition}</div>
        <div><b>Animal Type:</b> {intake.animal_type}</div>
        <div><b>Sex upon Intake:</b> {intake.sex_upon_intake}</div>
        <div><b>Age upon Intake:</b> {intake.age_upon_intake}</div>
        <div><b>Breed:</b> {intake.breed}</div>
        <div><b>Color:</b> {intake.color}</div>
      </div>
    )
}
