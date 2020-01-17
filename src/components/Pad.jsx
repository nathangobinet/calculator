import React from 'react';
import PropTypes from 'prop-types';

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.dispatchOperation = this.dispatchOperation.bind(this);
  }

  dispatchOperation(operation, value) {
    const { add, clear, equals } = this.props;
    switch (operation) {
      case 'add':
        add(value);
        break;
      case 'clear':
        clear();
        break;
      case 'equals':
        equals();
        break;
      default:
        break;
    }
  }

  render() {
    const {
      className, id, text, value, operation,
    } = this.props;

    return (
      <button onClick={() => this.dispatchOperation(operation, value)} type="button" className={`pad ${className}`} id={id}>{text}</button>
    );
  }
}


Pad.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  operation: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  equals: PropTypes.func.isRequired,
};

Pad.defaultProps = {
  value: null,
};

export default Pad;
