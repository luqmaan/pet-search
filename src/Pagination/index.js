import React, {Component, PropTypes} from 'react';
import {Button, ButtonCircle} from 'rebass';
import Icon from 'react-geomicons';

import './Pagination.css';

export default class Pagination extends Component {
  static propTypes = {
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    toPreviousPage: PropTypes.func.isRequired,
    toNextPage: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="Pagination">
        <ButtonCircle onClick={this.props.toPreviousPage}>
          <Icon name="chevronLeft" />
        </ButtonCircle>
        <div className="PageCounts">
          <b>{(this.props.offset + 1).toLocaleString()}-{Math.min(this.props.offset + this.props.limit, this.props.count).toLocaleString()}</b> of <b>{this.props.count.toLocaleString()}</b>
        </div>
        <ButtonCircle onClick={this.props.toNextPage}>
          <Icon name="chevronRight" />
        </ButtonCircle>
      </div>
    );
  }
}
