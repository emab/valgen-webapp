import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  id?: string;
  text: string;
  onClick?: Function;
  highlight?: boolean;
  children?: any;
}

const ControlButton: React.FC<Props> = ({
  id,
  text,
  onClick,
  highlight,
  children,
}) => {
  const handleOnClick = (evt: React.MouseEvent) => {
    if (id) {
      onClick && onClick(id);
    } else {
      onClick && onClick();
    }
  };

  return (
    <Button
      id={id}
      variant="outlined"
      color={highlight ? 'primary' : 'default'}
      className="tab-button"
      onClick={handleOnClick}
    >
      {text}
      {children}
    </Button>
  );
};

export default ControlButton;
