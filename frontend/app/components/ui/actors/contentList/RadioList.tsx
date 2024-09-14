import { Content, Radio } from '@/app/types/contentCategory';
import RadioCard from '../contentCard/RadioCard';

type Props = {
  content: Content[];
};

const RadioList = (props: Props) => {
  return (
    <div>
      {props.content.map((content, index) => (
        <RadioCard key={index} content={content as Radio} />
      ))}
    </div>
  );
};

export default RadioList;
