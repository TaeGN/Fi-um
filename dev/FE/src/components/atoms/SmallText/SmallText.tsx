interface SmallTextProps {
  text: string;
}

const SmallText = ({ text }: SmallTextProps) => {
  return <h6>{text}</h6>;
};

export default SmallText;
