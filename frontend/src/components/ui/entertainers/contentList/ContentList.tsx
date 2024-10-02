import { Content } from '@/types/contentCategory';
import ContentCard from '../contentCard/ContentCard';

type Props = {
  content: Content[];
};

const ContentList = (props: Props) => {
  return (
    <div>
      {props.content.map((content, index) => (
        <ContentCard key={index} content={content} />
      ))}
    </div>
  );
};

export default ContentList;
