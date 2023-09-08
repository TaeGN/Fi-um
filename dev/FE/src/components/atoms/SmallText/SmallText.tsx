import React from 'react';

type STProps = {
  text: String;
};

const SmallText = ({ text }: STProps) => {
  return <h6>{text}</h6>;
};

export default SmallText;
