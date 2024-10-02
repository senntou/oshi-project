import { Anime, Content } from '@/types/contentCategory';
import AnimeCard from '../contentCard/AnimeCard';

type Props = {
  content: Content[];
};

const AnimeList = (props: Props) => {
  return (
    <div>
      {props.content.map((content, index) => (
        <AnimeCard key={index} content={content as Anime} />
      ))}
    </div>
  );
};

export default AnimeList;
