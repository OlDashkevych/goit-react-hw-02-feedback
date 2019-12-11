import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, value }) => (
  <li className="feddbackItem">{`${label}: ${value}`}</li>
);
Statistic.defaultProps = {
  label: 'feedback',
  value: 0,
};
Statistic.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};
export default Statistic;
