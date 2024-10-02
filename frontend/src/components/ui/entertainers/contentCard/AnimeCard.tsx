import CardTitle from './CardTitle';
import CardDescription from './CardDiscription';
import { Anime } from '@/src/types/contentCategory';

type Props = {
  content: Anime;
};
const AnimeCard = (props: Props) => {
  return (
    <div className="p-5 border border-b-0 border-gray-200">
      <CardTitle>{props.content.title}</CardTitle>
      <CardDescription>{props.content.period}</CardDescription>
      <CardDescription>{props.content.description}</CardDescription>
    </div>
  );
};

export default AnimeCard;
