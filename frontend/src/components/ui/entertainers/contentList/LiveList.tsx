import { Content, Live } from '@/src/types/contentCategory';
import LiveCard from '../contentCard/LiveCard';

type Props = {
  content: Content[];
};

const LiveList = (props: Props) => {
  return (
    <div>
      {props.content.map((content, index) => (
        <LiveCard key={index} content={content as Live} />
      ))}
    </div>
  );
};

export default LiveList;
