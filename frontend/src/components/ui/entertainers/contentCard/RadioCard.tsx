import { Radio } from '@/src/types/contentCategory';
import CardTitle from './CardTitle';
import CardTag from './CardTag';
import CardDescription from './CardDiscription';

type Props = {
  content: Radio;
};

const RadioCard = (props: Props) => {
  return (
    <div className="p-5 border border-gray-200">
      <CardTitle>{props.content.title}</CardTitle>
      <div className="flex justify-start space-x-4 mb-2">
        <CardTag type="schedule_type">{props.content.schedule_type}</CardTag>
        {props.content.schedule_day && (
          <CardTag type="schedule_day">{props.content.schedule_day}</CardTag>
        )}
      </div>
      <CardDescription>{props.content.description}</CardDescription>
    </div>
  );
};

export default RadioCard;
