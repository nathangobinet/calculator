import { parse } from 'mathjs';

const CLEAR = 'CLEAR';
const ADD = 'ADD';
const EQUALS = 'EQUALS';

const clear = () => ({
  type: CLEAR,
});

const add = (element) => {
  console.log('hey');
  return ({
    type: ADD,
    element,
  });
};

const equals = () => ({
  type: EQUALS,
});

const calculReducer = (formula = '0', action) => {
  console.log('yo');
  switch (action.type) {
    case CLEAR:
      return '0';
    case ADD: {
      const newFormula = formula + action.element;
      console.log(newFormula);
      return newFormula;
    }
    case EQUALS: {
      const newFormula = parse(formula);
      return newFormula;
    }
    default:
      return formula;
  }
};

export {
  clear, add, equals, calculReducer,
};
