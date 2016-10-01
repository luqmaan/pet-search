import {PropTypes} from 'react';

export const IntakeFields = [
  {value: 'animal_id', type: PropTypes.string, label: 'Animal ID'},
  {value: 'name', type: PropTypes.string, label: 'Name'},
  {value: 'datetime', type: PropTypes.string, label: 'DateTime'},
  {value: 'datetime2', type: PropTypes.string, label: 'MonthYear'},
  {value: 'found_location', type: PropTypes.string, label: 'Found Location'},
  {value: 'intake_type', type: PropTypes.string, label: 'Intake Type'},
  {value: 'intake_condition', type: PropTypes.string, label: 'Intake Condition'},
  {value: 'animal_type', type: PropTypes.string, label: 'Animal Type'},
  {value: 'sex_upon_intake', type: PropTypes.string, label: 'Sex upon Intake'},
  {value: 'age_upon_intake', type: PropTypes.string, label: 'Age upon Intake'},
  {value: 'breed', type: PropTypes.string, label: 'Breed'},
  {value: 'color', type: PropTypes.string, label: 'Color'},
];
