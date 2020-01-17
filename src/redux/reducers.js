/* eslint-disable no-restricted-globals */
import { evaluate, parse } from 'mathjs';

const CLEAR = 'CLEAR';
const ADD = 'ADD';
const EQUALS = 'EQUALS';

const clear = () => ({
  type: CLEAR,
});

const add = (element) => ({
  type: ADD,
  element,
});

const equals = () => ({
  type: EQUALS,
});

function constructFormula(formula, element) {
  // Replace zero by the new number
  if (formula === '0') return element;

  const last = formula.slice(-1);

  // Check for multiple operation
  if ((isNaN(last) && isNaN(element)) && element !== '-') {
    let counter = 1;
    while (isNaN(formula.slice(0, -counter))) counter += 1;
    return formula.slice(0, -counter) + element;
  }

  const newFormula = formula + element;

  if (element === '.') {
    try {
      parse(newFormula);
    } catch (Exception) {
      return formula;
    }
  }

  return newFormula;
}

const calculReducer = (formula = '0', action) => {
  switch (action.type) {
    case CLEAR:
      return '0';
    case ADD:
      return constructFormula(formula, action.element);
    case EQUALS: {
      const newFormula = evaluate(formula).toString();
      return newFormula;
    }
    default:
      return formula;
  }
};

export {
  clear, add, equals, calculReducer,
};
