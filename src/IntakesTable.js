import React, {Component, PropTypes} from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import moment from 'moment';
import Image from './Image';
import './IntakesTable.css';

// import ExampleImage from './helpers/ExampleImage';
// import FakeObjectDataListStore from './helpers/FakeObjectDataListStore';

const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col].toLocaleString()}
  </Cell>
);

const ImageCell = ({rowIndex, data, col, ...props}) => (
  <div className="animal-image">
    <img src={`http://www.petharbor.com/get_image.asp?RES=Detail&ID=${data[rowIndex][col]}&LOCATION=ASTN`} />
  </div>
  // <Image
  //   src={`http://www.petharbor.com/get_image.asp?RES=Detail&ID=${data[rowIndex][col]}&LOCATION=ASTN`}
  // />
);

const LinkCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    <a href="#">{data[rowIndex][col]}</a>
  </Cell>
);

const MomentDateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {moment(data[rowIndex][col]).fromNow()}
  </Cell>
);

const AnimalIDLink = ({rowIndex, data, ...props}) => {
  const rowData = data[rowIndex];
  return (
    <Cell {...props}>
      <a href={`http://www.petharbor.com/pet.asp?uaid=ASTN.${rowData.animal_id}`} target="_blank">{rowData.animal_id}</a>
    </Cell>
  );
};

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);

export default class IntakesTable extends Component {
  static propTypes = {
    dataList: PropTypes.array,
  };

  render() {
    const {dataList} = this.props;

    return (
      <Table
        rowHeight={120}
        headerHeight={50}
        rowsCount={dataList.length}
        width={window.innerWidth}
        height={window.innerHeight}
        {...this.props}
      >
        <Column
          cell={<ImageCell data={dataList} col="animal_id" />}
          fixed={true}
          width={160}
        />
        <Column
          header={<Cell>Animal ID</Cell>}
          cell={<AnimalIDLink data={dataList} col="animal_id" />}
          fixed={true}
          width={100}
        />
        <Column
          header={<Cell>Name</Cell>}
          cell={<TextCell data={dataList} col="name" />}
          width={100}
        />
        <Column
          header={<Cell>DateTime</Cell>}
          cell={<MomentDateCell data={dataList} col="datetime" />}
          width={100}
        />
        <Column
          header={<Cell>Found Location</Cell>}
          cell={<TextCell data={dataList} col="found_location" />}
          width={200}
        />
        <Column
          header={<Cell>Intake Type</Cell>}
          cell={<TextCell data={dataList} col="intake_type" />}
          width={200}
        />
        <Column
          header={<Cell>Intake Condition</Cell>}
          cell={<TextCell data={dataList} col="intake_condition" />}
          width={200}
        />
        <Column
          header={<Cell>Animal Type</Cell>}
          cell={<TextCell data={dataList} col="animal_type" />}
          width={200}
        />
        <Column
          header={<Cell>Sex upon Intake</Cell>}
          cell={<TextCell data={dataList} col="sex_upon_intake" />}
          width={200}
        />
        <Column
          header={<Cell>Age upon Intake</Cell>}
          cell={<TextCell data={dataList} col="age_upon_intake" />}
          width={200}
        />
        <Column
          header={<Cell>Breed</Cell>}
          cell={<TextCell data={dataList} col="breed" />}
          width={200}
        />
        <Column
          header={<Cell>Color</Cell>}
          cell={<TextCell data={dataList} col="color" />}
          width={200}
        />
      </Table>
    );
  }
}
