import React from 'react';
import model from '../../img/model.png';

interface Props {
  title: string;
  outputValues: Function;
}

const Model: React.FC<Props> = ({ title, outputValues }) => {
  const populateModel = (): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    for (let i = 7; i >= 1; i--) {
      elements.push(<div key={`${title}${i}`}>{outputValues(i)}</div> ?? <div></div>);
    }
    return elements;
  };
  return (
    <>
      <h1 className="text-center">{title}</h1>
      <img src={model} className="model-image" />
      <div className="values-grid">
        {populateModel().map((element) => element)}
      </div>
    </>
  );
};

export default Model;
