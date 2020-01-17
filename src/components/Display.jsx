import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { formula } = props;
  return (
    <div id="display" className="display">{formula}</div>
  );
};

Display.propTypes = {
  formula: PropTypes.string.isRequired,
};

export default Display;
