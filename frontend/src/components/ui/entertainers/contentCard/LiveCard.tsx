import { Live } from '@/types/contentCategory';
import CardTitle from './CardTitle';
import CardDescription from './CardDiscription';

type Props = {
  content: Live;
};
const LiveCard = (props: Props) => {
  return (
    <div className="border border-b-0 border-gray-200 p-5">
      <CardTitle>{props.content.title}</CardTitle>
      <CardDescription>{props.content.date}</CardDescription>
      <CardDescription>{props.content.place}</CardDescription>
      <CardDescription>{props.content.description}</CardDescription>
    </div>
  );
};

export default LiveCard;
