import React from 'react';
import { connect } from 'react-redux';
import { add, clear, equals } from '../redux/reducers';

import Pad from './Pad';
import Display from './Display';

const mapPadDispatchToProps = (dispatch) => ({
  add: (element) => (
    dispatch(add(element))
  ),
  clear: () => (
    dispatch(clear())
  ),
  equals: () => (
    dispatch(equals())
  ),
});

const mapDisplayProps = (formula) => ({
  formula,
});

const DisplayContainer = connect(mapDisplayProps, null)(Display);

const PadContainer = connect(null, mapPadDispatchToProps)(Pad);

const App = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Calculator</h1>
        </div>
        <div className="col-12">
          <div className="calculator">
            <div className="row">
              <div className="col-12">
                <DisplayContainer />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-9">
                <PadContainer operation="clear" id="clear" text="AC" className="clear" />
              </div>
              <div className="col-3">
                <PadContainer value="+" operation="add" id="add" text="+" className="operation" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-3">
                <PadContainer value="7" operation="add" id="seven" text="7" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="8" operation="add" id="eight" text="8" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="9" operation="add" id="nine" text="9" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="*" operation="add" id="multiply" text="x" className="operation" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-3">
                <PadContainer value="4" operation="add" id="four" text="4" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="5" operation="add" id="five" text="5" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="6" operation="add" id="six" text="6" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="-" operation="add" id="subtract" text="-" className="operation" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-3">
                <PadContainer value="1" operation="add" id="one" text="1" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="2" operation="add" id="two" text="2" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="3" operation="add" id="three" text="3" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="/" operation="add" id="divide" text="/" className="operation" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-6">
                <PadContainer value="0" operation="add" id="zero" text="0" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="." operation="add" id="decimal" text="." className="number" />
              </div>
              <div className="col-3">
                <PadContainer operation="equals" id="equals" text="=" className="operation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
