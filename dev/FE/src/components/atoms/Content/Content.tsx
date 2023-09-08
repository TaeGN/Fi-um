import React from 'react';

type text = {
  text: String;
};

const Content = ({ text }: text) => {
  return <p>{text}</p>;
};

export default Content;
