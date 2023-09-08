interface ContentProps {
  text: string;
}

const Content = ({ text }: ContentProps) => {
  return <p>{text}</p>;
};

export default Content;
