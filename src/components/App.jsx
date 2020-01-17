import React from 'react';
import { connect } from 'react-redux';
import { add, clear, equals } from '../redux/reducers';

// TODO: Import components then connect them to props
import Pad from './Pad';

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
                <div className="display">0</div>
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
                <PadContainer value="7" operation="add" id="7" text="7" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="8" operation="add" id="8" text="8" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="9" operation="add" id="9" text="9" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="*" operation="add" id="multiply" text="x" className="operation" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-3">
                <PadContainer value="4" operation="add" id="4" text="4" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="5" operation="add" id="5" text="5" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="6" operation="add" id="6" text="6" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="-" operation="add" id="substract" text="-" className="operation" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-3">
                <PadContainer value="1" operation="add" id="1" text="1" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="2" operation="add" id="2" text="2" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="3" operation="add" id="3" text="3" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="/" operation="add" id="divide" text="/" className="operation" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-6">
                <PadContainer value="0" operation="add" id="0" text="0" className="number" />
              </div>
              <div className="col-3">
                <PadContainer value="." operation="add" id="decimal" text="," className="number" />
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
