import React from 'react';
import model from '../../img/model.png';
import redCircle from '../../img/circle-red.svg';
import circle from '../../img/circle.svg';
import './Preview.css';
import { connect } from 'react-redux';
import { State } from '../../types/State';
import { Value } from '../../types/Value';
import PreviewTable from './Table';
import { Values } from '../../types/Values';
import Model from './Model';

interface Props {
  personalValues: Value[];
  currentValues: Value[];
  idealValues: Value[];
}

const ADD_CIRCLE = (limiting: boolean | undefined, key: string) =>
  limiting ? <img key={key} src={redCircle} /> : <img key={key} src={circle} />;

const Preview: React.FC<Props> = ({
  personalValues,
  currentValues,
  idealValues,
}) => {
  const outputCircles = (values: Value[]) => (level: number) => {
    let circles: JSX.Element[] = [];
    values
      .filter((val) => val.level === level)
      .forEach((val) => {
        circles.push(ADD_CIRCLE(val.limiting, val.name));
      });
    return circles;
  };
  const outputPersonalValues = outputCircles(personalValues);
  const outputCurrentValues = outputCircles(currentValues);
  const outputIdealValues = outputCircles(idealValues);

  return (
    <div id="modelOutput" className="flex flex-row justify-center">
      <div className="model-container">
        <Model
          title="Personal Values"
          outputValues={outputPersonalValues}
        ></Model>
        <PreviewTable displayValue={Values.PERSONAL} />
      </div>
      <div className="model-container">
        <Model
          title="Current Organisational Values"
          outputValues={outputCurrentValues}
        ></Model>
        <PreviewTable displayValue={Values.CURRENT} />
      </div>
      <div className="model-container">
        <Model
          title="Desired Organisational Values"
          outputValues={outputIdealValues}
        ></Model>
        <PreviewTable displayValue={Values.IDEAL} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  personalValues: state.personal.values,
  currentValues: state.current.values,
  idealValues: state.ideal.values,
});

export default connect(mapStateToProps)(Preview);
