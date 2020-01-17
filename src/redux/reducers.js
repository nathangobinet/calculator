/* eslint-disable no-restricted-globals */
import { evaluate, parse } from 'mathjs';

const CLEAR = 'CLEAR';
const ADD = 'ADD';
const EQUALS = 'EQUALS';

let isResult;

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
  // New calcul after result if not an operation
  if (isResult) {
    isResult = false;
    if (!isNaN(element)) {
      return element;
    }
  }

  // Replace zero by the new number
  if (formula === '0') return element;

  // get the last element of the formula
  const last = formula.slice(-1);

  // Check for multiple operation
  if ((isNaN(last) && isNaN(element)) && element !== '-') {
    let counter = 1;
    while (isNaN(formula.slice(0, -counter))) counter += 1;
    return formula.slice(0, -counter) + element;
  }

  // Set the new formula with the new element
  const newFormula = formula + element;

  // Verify the '.' coherence (not 2 point)
  if (element === '.') {
    try {
      parse(newFormula);
    } catch (Exception) {
      return formula;
    }
  }

  return newFormula;
}

function getResult(formula) {
  try {
    const newFormula = evaluate(formula).toString();
    isResult = true;
    return newFormula;
  } catch (Exception) {
    return formula;
  }
}

const calculReducer = (formula = '0', action) => {
  switch (action.type) {
    case CLEAR:
      return '0';
    case ADD:
      return constructFormula(formula, action.element);
    case EQUALS: {
      return getResult(formula);
    }
    default:
      return formula;
  }
};

export {
  clear, add, equals, calculReducer,
};
